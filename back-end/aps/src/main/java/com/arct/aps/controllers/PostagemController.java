package com.arct.aps.controllers;

import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeoutException;

import com.arct.aps.domain.Postagem;
import com.arct.aps.dto.PostagemDTO;
import com.arct.aps.services.PostagemService;

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
@RequestMapping(value = "/postagens")
public class PostagemController {

    @Autowired
    private PostagemService postagemService;
    
    @GetMapping(value = "/details")
    public PostagemDTO findById(@RequestParam String id) throws ExecutionException, InterruptedException {
        return postagemService.findById(id);
    }

    @PostMapping(value = "/create")
    public String create (@RequestBody Postagem obj) throws ExecutionException, InterruptedException {
      return postagemService.create(obj);
    }

    @PutMapping(value = "/update")
    public String update (@RequestBody Postagem obj) throws ExecutionException, InterruptedException {
        return postagemService.update(obj);
    }

    @DeleteMapping("/delete")
    public String deletePatient(@RequestParam String id){
        return postagemService.delete(id);
    }

    @GetMapping(value = "/find")
    public List <PostagemDTO> find (@RequestParam String field, @RequestParam String name) throws InterruptedException, ExecutionException {
        return this.postagemService.find(field, name);
    }


    @GetMapping("/list")
    public List <PostagemDTO> getListPostagem(String field, Integer limitDoc) throws InterruptedException, ExecutionException{
        return postagemService.list(field, limitDoc);
    }

    @GetMapping(value = "/page")
    public List <PostagemDTO> findPage(@RequestParam String field,@RequestParam String fielsValues, @RequestParam Integer limitDoc)  throws InterruptedException, ExecutionException, TimeoutException {
      return postagemService.page(field, fielsValues, limitDoc);
    }
}
