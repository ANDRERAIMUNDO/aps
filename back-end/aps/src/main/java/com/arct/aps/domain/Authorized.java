package com.arct.aps.domain;

import java.io.Serializable;

public class Authorized implements Serializable {

    private static final long serialVersionUID = 1L;

    private String name;
    private String principalName;
    private OAuth2Token accessToken;
    private String picture;
    
    public Authorized() {

    }

    public Authorized(String name, String principalName, OAuth2Token accessToken,String picture) {
        this.name = name;
        this.principalName = principalName;
        this.accessToken = accessToken;
        this.picture = picture;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPrincipalName() {
        return principalName;
    }

    public void setPrincipalName(String principalName) {
        this.principalName = principalName;
    }

    public OAuth2Token getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(OAuth2Token accessToken) {
        this.accessToken = accessToken;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }
    
}
