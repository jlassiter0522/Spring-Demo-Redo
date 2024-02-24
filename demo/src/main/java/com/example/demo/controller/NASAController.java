package com.example.demo.controller;

import com.example.demo.domain.NASAParam;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/nasa")
public class NASAController {
    @GetMapping("/date")
    public NASAParam nasaPOD(@RequestParam (value = "date", defaultValue = "") String date){
        RestTemplate nasaTemp = new RestTemplate();
        NASAParam result = nasaTemp.getForObject("https://api.nasa.gov/planetary/apod?api_key=HrgUnKEFOtxVlQkjXZvMtLyNfSnstgpnsLHcd83N&date=" + date, NASAParam.class);
        return result;
    }

}
