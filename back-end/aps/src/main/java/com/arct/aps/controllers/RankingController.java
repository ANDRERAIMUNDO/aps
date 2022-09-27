package com.arct.aps.controllers;

import java.util.List;
import java.util.concurrent.ExecutionException;

import com.arct.aps.domain.Ranking;
import com.arct.aps.dto.RankingDTO;
import com.arct.aps.services.RankingService;

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
@RequestMapping(value = "/ranking")
public class RankingController {

    @Autowired
    private RankingService rankingService;
    
    @PostMapping(value = "/create")
    public String create (@RequestBody Ranking obj) throws ExecutionException, InterruptedException {
      return rankingService.create(obj);
    }

    @PutMapping(value = "/update")
    public String update (@RequestBody Ranking obj) throws ExecutionException, InterruptedException {
        return rankingService.update(obj);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/delete")
    public String deletePatient(@RequestParam String id){
        return rankingService.delete(id);
    }

    @GetMapping(value = "/find")
    public List <RankingDTO> find (@RequestParam String field, @RequestParam String name) throws InterruptedException, ExecutionException {
        return this.rankingService.find(field, name);
    }


    @GetMapping("/list")
    public List <RankingDTO> getListPostagem(String field, Integer limitDoc) throws InterruptedException, ExecutionException{
        return rankingService.list(field, limitDoc);
    }

}

