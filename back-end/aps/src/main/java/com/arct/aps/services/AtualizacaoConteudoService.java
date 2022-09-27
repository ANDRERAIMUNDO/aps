package com.arct.aps.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Random;
import java.util.concurrent.ExecutionException;

import com.arct.aps.config.ConstantsSecurity;
import com.arct.aps.domain.AtualizacaoConteudo;
import com.arct.aps.dto.AtualizacaoConteudoDTO;
import com.arct.aps.security.UserSS;
import com.arct.aps.security.UserService;
import com.arct.aps.services.exception.AuthorizationException;
import com.arct.aps.services.exception.ObjectNotFoundException;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;

import org.springframework.stereotype.Service;
import org.threeten.bp.LocalDateTime;

@Service
public class AtualizacaoConteudoService {

    public static String databaseUrl = ConstantsSecurity.databaseUrl;

    private Random random = new Random();
    
    private static final String COLLETION_NAME="atualizacao_conteudo";

    public String create (AtualizacaoConteudo obj) throws ExecutionException, InterruptedException {
        UserSS user = UserService.authenticated();
        if (user.getUsername().equals(null))
        {
            throw new AuthorizationException("Usuario naõ esta logado .");
        }
        
        String id = generateId();
        String localDate = configDate(LocalDateTime.now().toString());
        
        AtualizacaoConteudo atualizacaoConteudo = new AtualizacaoConteudo(id, obj.getDate(), obj.getSubTitle(), obj.getId_postagem());
        AtualizacaoConteudoDTO atualizacaoConteudoDTO = new AtualizacaoConteudoDTO(id, localDate, obj.getSubTitle(), obj.getId_postagem());
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> collectionApiFuture = 
            dbFirestore.collection(COLLETION_NAME)
            .document(atualizacaoConteudo.getId()).set(atualizacaoConteudoDTO);
        return collectionApiFuture.get().getUpdateTime().toString();
    }

    public String update (AtualizacaoConteudo obj) throws ExecutionException, InterruptedException {
        UserSS user = UserService.authenticated();
        if (user.getUsername().equals(null))
        {
            throw new AuthorizationException("Usuario naõ esta logado .");
        }
       String id = obj.getId();
       String localDate = configDate(LocalDateTime.now().toString());

       AtualizacaoConteudo atualizacaoConteudo = new AtualizacaoConteudo(id, obj.getDate(), obj.getSubTitle(), obj.getId_postagem());
       AtualizacaoConteudoDTO atualizacaoConteudoDTO = new AtualizacaoConteudoDTO(id, localDate, obj.getSubTitle(), obj.getId_postagem());
       Firestore dbFirestore = FirestoreClient.getFirestore();
       ApiFuture<WriteResult> collectionApiFuture = 
           dbFirestore.collection(COLLETION_NAME)
           .document(atualizacaoConteudo.getId()).set(atualizacaoConteudoDTO);
       return collectionApiFuture.get().getUpdateTime().toString();
    }

    public AtualizacaoConteudoDTO findById (String id) throws InterruptedException, ExecutionException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection(COLLETION_NAME).document(id);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        AtualizacaoConteudoDTO atualizacaoConteudo = null;

        if (document.exists()) {
            atualizacaoConteudo = document.toObject(AtualizacaoConteudoDTO.class);
            return atualizacaoConteudo;
        }   else {
            throw new ObjectNotFoundException("Objeto não encontrado na base -> com ID ->" + id);
            }
    }

    public List <AtualizacaoConteudoDTO> getListAtualizacaoConteudo() throws InterruptedException, ExecutionException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        Iterable<DocumentReference> documentReference = dbFirestore.collection(COLLETION_NAME).listDocuments();
        Iterator<DocumentReference> iterator = documentReference.iterator();
        List<AtualizacaoConteudoDTO> atualizacaoConteudolList = new ArrayList<>();
        AtualizacaoConteudoDTO atualizacaoConteudol = null;
        while(iterator.hasNext()) {
            DocumentReference documentReference1 = iterator.next();
            ApiFuture<DocumentSnapshot> future = documentReference1.get();
            DocumentSnapshot document = future.get();
            atualizacaoConteudol = document.toObject(AtualizacaoConteudoDTO.class);
            atualizacaoConteudolList.add(atualizacaoConteudol);
        }
        return atualizacaoConteudolList;
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

    private String generateId() {
		char[] vet = new char[10];
		for (int i=0; i<10; i++) {
			vet[i] = randomChar();
		}
		return new String(vet);
	}

	private char randomChar() { 
        random.nextInt(4);
		return (char) (random.nextInt(10) + 48);
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
}
