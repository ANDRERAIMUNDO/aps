package com.arct.aps.security;

import java.util.Collection;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.arct.aps.domain.enums.Perfil;

public class UserSS  implements UserDetails{

    private Integer id;
    private String email;
    private String password;

    private Collection<? extends GrantedAuthority> authorities;

    public UserSS () {

    }


    public UserSS(Integer id, String email, String password, Set<Perfil> perfils) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.authorities =perfils.stream().map(x -> new SimpleGrantedAuthority(x.getDescricao()))
        .collect(Collectors.toList());
    }

    public Integer getId() {
        return id;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public boolean hasRole(Perfil perfil) {
		return getAuthorities().contains(new SimpleGrantedAuthority(perfil.getDescricao()));
	}
}