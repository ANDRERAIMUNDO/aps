package com.arct.aps.dto;

import java.io.Serializable;

public class UsuarioDTO implements Serializable {
    
    private Integer id;
    private String email;
    private String nome;
    private String sobrenome;
    private String imagem;   

    public UsuarioDTO() {

    }

    public UsuarioDTO(Integer id, String email, String nome, String sobrenome, String imagem) {
        this.id = id;
        this.email = email;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.imagem = imagem;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    
    
}
