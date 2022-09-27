package com.arct.aps.services;

import java.util.Optional;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.arct.aps.domain.Usuario;
import com.arct.aps.repository.UsuarioRepository;
import com.arct.aps.security.UserSS;
import com.arct.aps.security.UserService;
import com.arct.aps.services.exception.AuthorizationException;
import com.arct.aps.services.exception.DataIntegrityException;
import com.arct.aps.services.exception.ObjectNotFoundException;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

	public BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder(); 
	}

    @Transactional
    public Usuario create (Usuario obj) {
        obj.setId(null);
        obj.setPassword(bCryptPasswordEncoder().encode(obj.getPassword()));
        obj = usuarioRepository.save(obj);
        return obj;
    }

    public Usuario find(Integer id) {
        Optional <Usuario> obj = usuarioRepository.findById(id);
        return obj.orElseThrow(()-> new 
        ObjectNotFoundException("Registro não encontrado Id: "+ id + " Tipo: "
         + Usuario.class.getName()));
    }

    public Usuario findById(Integer id) {
        UserSS user = UserService.authenticated();
        if (!id.equals(user.getId()))
        {
            throw new AuthorizationException("Usuario logado não pode acessa essas informações .");
        }
        Optional <Usuario> obj = usuarioRepository.findById(id);
        return obj.orElseThrow(()-> new 
        ObjectNotFoundException("Registro não encontrado Id: "+ id + " Tipo: "
         + Usuario.class.getName()));
    }

    public Usuario findUserByEmail (String email) {
        UserSS user = UserService.authenticated();
        Usuario obj = usuarioRepository.findByEmail(email);
        if (!obj.getId().equals(user.getId()))
        {
            throw new AuthorizationException("Usuario logado não pode acessa essas informações .");
        }
        return obj;
    }

    public Usuario update(Usuario obj) {
        UserSS user = UserService.authenticated();
        if (!obj.getId().equals(user.getId()))
        {
            throw new AuthorizationException("Usuario logado não pode acessa essas informações .");
        }
        Usuario newObj = findById(obj.getId());
        updateUsuario(newObj, obj);
        return usuarioRepository.save(newObj);
    }

    private void updateUsuario (Usuario newObj, Usuario obj) {
        newObj.setId(obj.getId());
        newObj.setEmail(obj.getEmail());
        newObj.setPassword(bCryptPasswordEncoder().encode(obj.getPassword()));
        newObj.setNome(obj.getNome());
        newObj.setSobrenome(obj.getSobrenome());
        newObj.setImagem(obj.getImagem());
        newObj.setPhone(obj.getPhone());
    }

    public void delete (Integer id) {
        findById(id);
        try {
            usuarioRepository.deleteById(id);
        } catch (DataIntegrityViolationException e) {
            throw new DataIntegrityException ("Não é possivel excluir");
        }
    }
}
