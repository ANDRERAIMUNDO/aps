package com.arct.aps.services;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.arct.aps.domain.Usuario;
import com.arct.aps.repository.UsuarioRepository;
import com.arct.aps.services.exception.ObjectNotFoundException;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

@Service
public class Auth0Service {
    
    @Autowired
    private UsuarioRepository usuarioRepository;

	public BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder(); 
	}

    private Random random = new Random();


    public void sendNewPassword (String email) {
        Usuario usuario = usuarioRepository.findByEmail(email);
		if (usuario == null) {
            throw new ObjectNotFoundException("Email não encontrado! .");
        }
        String newPassword = newPassword();
		String twilioPhoneTo = usuario.getPhone();
		usuario.setPassword(bCryptPasswordEncoder().encode(newPassword));
        usuarioRepository.save(usuario);
        String msg = "Segue codigo de recuperacão de senha - aps:  " +  newPassword;
		Twilio.init("id-secret", "password-secret");
		PhoneNumber to = new PhoneNumber(twilioPhoneTo);
		PhoneNumber from = new PhoneNumber("+000000000");
		Message message = Message.creator(to, from, msg).create();
		System.out.println(message.getSid());
    }

    private String newPassword() {
		char[] vet = new char[10];
		for (int i=0; i<10; i++) {
			vet[i] = randomChar();
		}
		return new String(vet);
	}

	private char randomChar() {
		int opt = random.nextInt(3);
		if (opt == 0) {
			return (char) (random.nextInt(10) + 48);
		}
		else if (opt == 1) {
			return (char) (random.nextInt(26) + 65);
		}
		else { 
			return (char) (random.nextInt(26) + 97);
		}
    }
}
