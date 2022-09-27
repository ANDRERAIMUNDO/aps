package com.arct.aps.controllers;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.arct.aps.domain.Usuario;
import com.arct.aps.security.JWTUtil;
import com.arct.aps.security.UserSS;
import com.arct.aps.security.UserService;
import com.arct.aps.services.Auth0Service;
import com.arct.aps.services.UsuarioService;


@RestController
@RequestMapping(value = "/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private Auth0Service auth0Service;
    
    @Autowired
    private JWTUtil jwtUtil;
    
    @PreAuthorize("hasRole('ADMIN')")
    @RequestMapping(value ="/create", method = RequestMethod.POST)
    public Usuario create (@RequestBody Usuario obj) {
        return usuarioService.create(obj);
    }


    @RequestMapping(value = "/_id/{id}", method = RequestMethod.GET)
    public Usuario find (@PathVariable Integer id){
        return usuarioService.find(id);
    }

    @RequestMapping(value = "/userDetails", method = RequestMethod.GET)
    public Usuario findById (@RequestParam Integer id) {
        return usuarioService.findById(id);
    }

    @RequestMapping(value = "/findUserByEmail", method = RequestMethod.GET)
    public Usuario findById (@RequestParam String email) {
        return usuarioService.findUserByEmail(email);
    }

    @RequestMapping(value ="/update", method = RequestMethod.PUT)
    public ResponseEntity <Void> update (@Valid @RequestBody Usuario obj) {
    usuarioService.update(obj);
    return ResponseEntity.noContent().build();
   }

   @PreAuthorize("hasRole('ADMIN')")
   @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity <Void> delete (@PathVariable Integer id) {
        usuarioService.delete(id);
        return ResponseEntity.noContent().build();
      }

    @RequestMapping(value = "/refresh_token", method = RequestMethod.POST)
    public ResponseEntity<Void> refreshToken(HttpServletResponse response) {
        UserSS user = UserService.authenticated();
        String token = jwtUtil.generateToken(user.getUsername());
        response.addHeader("Authorization", "Bearer " + token);
        response.addHeader("access-control-expose-headers", "Authorization");
        return ResponseEntity.noContent().build();
    }

    @RequestMapping(value = "/forgot/{email}", method = RequestMethod.POST)
    public ResponseEntity<Void> forgot(@PathVariable String email) {
        auth0Service.sendNewPassword(email);
        return ResponseEntity.noContent().build();
    }
}
