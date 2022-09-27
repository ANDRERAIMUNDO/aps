package com.arct.aps.services;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

import com.arct.aps.config.ConstantsSecurity;
import com.arct.aps.domain.Carroucel;
import com.arct.aps.dto.CarroucelDTO;
import com.arct.aps.security.UserSS;
import com.arct.aps.security.UserService;
import com.arct.aps.services.exception.AuthorizationException;
import com.arct.aps.services.exception.ObjectNotFoundException;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.CollectionReference;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.Query;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.cloud.firestore.WriteResult;
import com.google.cloud.firestore.Query.Direction;
import com.google.firebase.cloud.FirestoreClient;

import org.springframework.stereotype.Service;
import org.threeten.bp.LocalDateTime;

@Service
public class CarroucelService {

    public static String databaseUrl = ConstantsSecurity.databaseUrl;

    private static final String COLLETION_NAME="carroucel";

    public String create (Carroucel obj) throws ExecutionException, InterruptedException {
        UserSS user = UserService.authenticated();
        if (user.getUsername().equals(null))
        {
            throw new AuthorizationException("Usuario não esta logado .");
        }
        
        String id = generaIdDateFormat();
        String localDate = configDate(LocalDateTime.now().toString());
        CarroucelDTO carroucelDTO = new CarroucelDTO(id, localDate, obj.getTitle(), obj.getSubTitle(), obj.getImage(), obj.getId_postagem(), obj.getId_anime());
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> collectionApiFuture = 
            dbFirestore.collection(COLLETION_NAME)
            .document(carroucelDTO.getId()).set(carroucelDTO);
        return collectionApiFuture.get().getUpdateTime().toString();
    }

    public String update (Carroucel obj) throws ExecutionException, InterruptedException {
        UserSS user = UserService.authenticated();
        if (user.getUsername().equals(null))
        {
            throw new AuthorizationException("Usuario naõ esta logado .");
        }
       String id = obj.getId();
       String localDate = configDate(LocalDateTime.now().toString());
       Carroucel carroucel = new Carroucel(id, obj.getDate(), obj.getTitle(), obj.getSubTitle(), obj.getImage(), obj.getId_postagem(), obj.getId_anime());
       CarroucelDTO carroucelDTO = new CarroucelDTO(id, localDate, obj.getTitle(), obj.getSubTitle(), obj.getImage(), obj.getId_postagem(), obj.getId_anime());
       Firestore dbFirestore = FirestoreClient.getFirestore();
       ApiFuture<WriteResult> collectionApiFuture = 
           dbFirestore.collection(COLLETION_NAME)
           .document(carroucel.getId()).set(carroucelDTO);
       return collectionApiFuture.get().getUpdateTime().toString();
    }

    public String delete(String id) {
        UserSS user = UserService.authenticated();
        if (user.getUsername().equals(null))
        {
            throw new AuthorizationException("Usuario não esta logado .");
        }
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> writeResult = dbFirestore.collection(COLLETION_NAME).document(id).delete();
        return "Conteudo ID " + writeResult.hashCode() + id + " foi removido";
    }

    public List <CarroucelDTO> find (String field, String name) throws InterruptedException, ExecutionException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        CollectionReference coletion = dbFirestore.collection(COLLETION_NAME);
        Query query = coletion.orderBy(field, Direction.DESCENDING).startAt(name).limit(20);
        ApiFuture<QuerySnapshot> querySnapshot = query.get();
        CarroucelDTO carroucel = null;
        List<CarroucelDTO> carroucelList = new ArrayList<>();
        for (DocumentSnapshot document : querySnapshot.get().getDocuments()) {
            carroucel = document.toObject(CarroucelDTO.class);
            carroucelList.add(carroucel);
          }
          return carroucelList;
    }


    public List <CarroucelDTO> list(String field, Integer limitDoc) throws InterruptedException, ExecutionException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        CollectionReference coletion = dbFirestore.collection(COLLETION_NAME);
        Query query = coletion.orderBy(field, Direction.DESCENDING).limit(limitDoc);
        ApiFuture<QuerySnapshot> querySnapshot = query.get();
        List<CarroucelDTO> carroucelList = new ArrayList<>();
        CarroucelDTO carroucel = null;
        for (DocumentSnapshot document : querySnapshot.get().getDocuments()) {
          carroucel = document.toObject(CarroucelDTO.class);
          carroucelList.add(carroucel);
        }
        return carroucelList;
    }

    public CarroucelDTO findById (String id) throws InterruptedException, ExecutionException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection(COLLETION_NAME).document(id);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        CarroucelDTO carroucel = null;

        if (document.exists()) {
            carroucel = document.toObject(CarroucelDTO.class);
            return carroucel;
        }   else {
            throw new ObjectNotFoundException("Objeto não encontrado na base -> com ID ->" + id);
            }
    }
    
    private String configDate(String localDate) {
        String timeNow = localDate;
        String[] parts = timeNow.split("-");
        String parts_dia_format = parts[2];
        String[] dia_format = parts_dia_format.split("T");
        String dia = dia_format[0];
        String mes = parts[1];
        String ano = parts[0];
        String[] value = timeNow.split("T");
        String hora_format = value[1];
        String[] value_hora_format = hora_format.split(":");
        String hora = value_hora_format[0];
        String minuto = value_hora_format[1];
        String hora_final = dia+"-"+mes+"-"+ano+" as "+hora+":"+minuto;
        return hora_final;
    }

//ano + mes + dia + hora
    private String generaIdDateFormat() {
        LocalDateTime localDateTime = LocalDateTime.now();
        String localDate = localDateTime.toString();
        String[] parts = localDate.split("T");
        String dia = parts[0];
        String[] dia_split = dia.split("-");
        String diaa = dia_split[2];
        String mes = dia_split[1];
        String ano = dia_split[0];
        //String dia1 = diaa+mes+ano;
        String dia1 = ano+mes+diaa;
        String hora = parts[1];
        String hora1 = hora.replaceAll(":", "");
        String format_id = dia1+hora1.replace(".", "");
        return format_id;
    }
}
