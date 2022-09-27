package com.arct.aps.controllers;

import java.util.List;
import java.util.concurrent.ExecutionException;

import com.arct.aps.domain.Carroucel;
import com.arct.aps.dto.CarroucelDTO;
import com.arct.aps.services.CarroucelService;

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
@RequestMapping(value = "/carroucel")
public class CarroucelController {

    @Autowired
    private CarroucelService carroucelService;

    @PostMapping(value = "/create")
    public String create (@RequestBody Carroucel obj) throws ExecutionException, InterruptedException {
      return carroucelService.create(obj);
    }

    @PutMapping(value = "/update")
    public String update (@RequestBody Carroucel obj) throws ExecutionException, InterruptedException {
        return carroucelService.update(obj);
    }

    @DeleteMapping("/delete")
    public String deletePatient(@RequestParam String id){
        return carroucelService.delete(id);
    }

    @GetMapping(value = "/find")
    public List <CarroucelDTO> find (@RequestParam String field, @RequestParam String name) throws InterruptedException, ExecutionException {
        return this.carroucelService.find(field, name);
    }

    @GetMapping("/list")
    public List <CarroucelDTO> getListPostagem(String field, Integer limitDoc) throws InterruptedException, ExecutionException{
        return carroucelService.list(field, limitDoc);
    }

    @GetMapping(value = "/details")
    public CarroucelDTO findById(@RequestParam String id) throws ExecutionException, InterruptedException {
        return carroucelService.findById(id);
    }
}

