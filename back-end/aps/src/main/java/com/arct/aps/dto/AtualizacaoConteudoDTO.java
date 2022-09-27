package com.arct.aps.dto;

import java.io.Serializable;

public class AtualizacaoConteudoDTO implements Serializable {

    private static final long serialVersionUID = 1L;
    private String id;
    private String date;
    private String subTitle;
    private String id_postagem;

    public AtualizacaoConteudoDTO() {

    }

    public AtualizacaoConteudoDTO (String id,  String date, String subTitle, String id_postagem) {
        this.id = id;
        this.date = date;
        this.subTitle = subTitle;
        this.id_postagem = id_postagem;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getSubTitle() {
        return subTitle;
    }

    public void setSubTitle(String subTitle) {
        this.subTitle = subTitle;
    }

    public String getId_postagem() {
        return id_postagem;
    }

    public void setId_postagem(String id_postagem) {
        this.id_postagem = id_postagem;
    }
    
}