package com.arct.aps.domain;

import java.io.Serializable;
import java.time.Instant;

public class OAuth2Token implements Serializable {

    private static final long serialVersionUID = 1L;
    
    private String tokenType;
    private String tokenValue;
    private Instant issuedAt;
    private Instant expiresAt;

    public OAuth2Token() {

    }

    public OAuth2Token(String tokenType, String tokenValue, Instant issuedAt, Instant expiresA) {
        this.tokenType = tokenType;
        this.tokenValue = tokenValue;
        this.issuedAt = issuedAt;
        this.expiresAt = expiresA;
    }

    public String getTokenType() {
        return tokenType;
    }

    public void setTokenType(String tokenType) {
        this.tokenType = tokenType;
    }

    public String getTokenValue() {
        return tokenValue;
    }

    public void setTokenValue(String tokenValue) {
        this.tokenValue = tokenValue;
    }

    public Instant getIssuedAt() {
        return issuedAt;
    }

    public void setIssuedAt(Instant issuedAt) {
        this.issuedAt = issuedAt;
    }

    public Instant getExpiresA() {
        return expiresAt;
    }

    public void setExpiresA(Instant expiresA) {
        this.expiresAt = expiresA;
    }

}
