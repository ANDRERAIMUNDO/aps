package com.arct.aps.dto;

import java.io.Serializable;

public class RankingDTO implements Serializable {

    private static final long serialVersionUID = 1L;
    private String id;
    private String date;
    private String title;
    private String image;
    private String id_anime;

    public RankingDTO () {

    }

    public RankingDTO(String id, String date, String title, String image, String id_anime) {
        this.id = id;
        this.date = date;
        this.title = title;
        this.image = image;
        this.id_anime = id_anime;
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

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getId_anime() {
        return id_anime;
    }

    public void setId_anime(String id_anime) {
        this.id_anime = id_anime;
    }    
    
}
