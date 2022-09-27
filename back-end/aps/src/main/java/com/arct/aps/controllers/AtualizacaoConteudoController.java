package com.arct.aps.controllers;

import java.util.List;
import java.util.concurrent.ExecutionException;

import com.arct.aps.domain.AtualizacaoConteudo;
import com.arct.aps.dto.AtualizacaoConteudoDTO;
import com.arct.aps.services.AtualizacaoConteudoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/updatesnow")
public class AtualizacaoConteudoController {

    @Autowired
    private AtualizacaoConteudoService atualizacaoConteudoService;
    
    @GetMapping(value = "/details")
    public AtualizacaoConteudoDTO findById(@RequestParam String id) throws ExecutionException, InterruptedException {
        return atualizacaoConteudoService.findById(id);
    }

    @GetMapping("/page")
    public List <AtualizacaoConteudoDTO> getListAtualizacaoConteudo() throws InterruptedException, ExecutionException{
        return atualizacaoConteudoService.getListAtualizacaoConteudo();
    }

    @PostMapping(value = "/create")
    public String create (@RequestBody AtualizacaoConteudo obj) throws ExecutionException, InterruptedException {
      return atualizacaoConteudoService.create(obj);
    }

    @PutMapping(value = "/update")
    public String update (@RequestBody AtualizacaoConteudo obj) throws ExecutionException, InterruptedException {
        return atualizacaoConteudoService.update(obj);
    }

    @DeleteMapping("/delete")
    public String deletePatient(@RequestParam String id){
        return atualizacaoConteudoService.delete(id);
    }
}

