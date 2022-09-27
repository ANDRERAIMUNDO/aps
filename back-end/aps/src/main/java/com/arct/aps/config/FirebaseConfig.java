package com.arct.aps.config;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

@Service
public class FirebaseConfig {

    private Logger log = LoggerFactory.getLogger(FirebaseConfig.class);
    
    public static String storageBucket = ConstantsSecurity.storageBucket;

    public static String databaseUrl = ConstantsSecurity.databaseUrl;

    @EventListener
    public void loginFireBaseAccount (ApplicationReadyEvent event) {
		
        try {
            ClassPathResource serviceAccount = new ClassPathResource("animesparasempre-ae91cc97fe2c.json");
            FirebaseOptions options = new FirebaseOptions.Builder()
                .setCredentials(GoogleCredentials.fromStream(serviceAccount.getInputStream()))
                .setStorageBucket(storageBucket)
               // .setDatabaseUrl(databaseUrl)
                .build();
	
            FirebaseApp.initializeApp(options);
            log.info("firebase, logado com sucesso");
        } catch (Exception ex) {
            ex.printStackTrace();
            log.info("firebase, não foi possivel logar");
        }
    }
}
