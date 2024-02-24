package com.example.demo.controller;



import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.domain.XkcdComic;

@RequestMapping("/xkcd")
@RestController
public class XKCDController {
    
    @GetMapping("/current")
    public XkcdComic xkcdComic(){
        RestTemplate restTemplate = new RestTemplate();
        XkcdComic result = restTemplate.getForObject("https://xkcd.com/info.0.json", XkcdComic.class);
        return result;
    }
    @GetMapping("/past/{comicNumber}")
    public XkcdComic xkcdComicPast(@PathVariable String comicNumber){
        RestTemplate restTemplate = new RestTemplate();
        XkcdComic result = restTemplate.getForObject("https://xkcd.com/" + comicNumber + "/info.0.json", XkcdComic.class);
        return result;
    }

}
