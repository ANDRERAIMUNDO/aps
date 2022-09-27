package com.arct.aps.controllers;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping(value = "/animes")
public class AnimesController {

	@RequestMapping(value="/id/{id}", method=RequestMethod.GET)
    public String getAnimeId( @PathVariable String id ) {
        String uri = "https://api.jikan.moe/v4/anime/"+id;
        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(uri, String.class);
        return result;
    }

    @RequestMapping(value="/name", method=RequestMethod.GET)
    public String getName( @RequestParam String letter ) {
        String uri = "https://api.jikan.moe/v4/anime?letter="+letter;
        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(uri, String.class);
        return result;
    }

    @RequestMapping(value="/topweek", method=RequestMethod.GET)
    public String topSemanal( @RequestParam String type, @RequestParam String filter, @RequestParam String page, @RequestParam String limit ) {
        String uri = "https://api.jikan.moe/v4/top/anime?type="+type+"&filter="+filter+"&page="+page+"&limit="+limit;
        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(uri, String.class);
        return result;
    }

    //schedules ou calendario da semana general 
    @RequestMapping(value="/schedules", method=RequestMethod.GET)
    public String schedules( @RequestParam String page, @RequestParam String filter, @RequestParam String kids, @RequestParam String sfw) {
        String uri = "https://api.jikan.moe/v4/schedules?page="+page+"&filter="+filter+"&kids="+kids+"&sfw="+sfw;
        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(uri, String.class);
        return result;
    }

    //proximos mais aguardados
    @RequestMapping(value="/upcoming", method=RequestMethod.GET)
    public String upcoming( @RequestParam String limit) {
        String uri = "https://api.jikan.moe/v4/top/anime?filter=upcoming&limit="+limit;
        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(uri, String.class);
        return result;
    }

    //top animes
    @RequestMapping(value="/top", method=RequestMethod.GET)
    public String top( @RequestParam String limit) {
        String uri = "https://api.jikan.moe/v4/top/anime?limit="+limit;
        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(uri, String.class);
        return result;
    }
}

