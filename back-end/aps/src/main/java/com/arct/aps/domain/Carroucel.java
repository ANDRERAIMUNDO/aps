package com.arct.aps.domain;

import java.io.Serializable;
import java.time.LocalDate;

public class Carroucel implements Serializable {

    private static final long serialVersionUID = 1L;
    private String id;
    private LocalDate date;
    private String title;
    private String subTitle;
    private String image;
    private String id_postagem;
    private String id_anime;

    public Carroucel () {

    }

    public Carroucel(String id, LocalDate date, String title, String subTitle, String image, String id_postagem, String id_anime) {
        this.id = id;
        this.date = date;
        this.title = title;
        this.subTitle = subTitle;
        this.image = image;
        this.id_postagem = id_postagem;
        this.id_anime = id_anime;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public static long getSerialversionuid() {
        return serialVersionUID;
    }


    public String getSubTitle() {
        return subTitle;
    }


    public void setSubTitle(String subTitle) {
        this.subTitle = subTitle;
    }


    public String getImage() {
        return image;
    }


    public void setImage(String image) {
        this.image = image;
    }


    public String getId_postagem() {
        return id_postagem;
    }


    public void setId_postagem(String id_postagem) {
        this.id_postagem = id_postagem;
    }

    public String getId_anime() {
        return id_anime;
    }

    public void setId_anime(String id_anime) {
        this.id_anime = id_anime;
    }
}