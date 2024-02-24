package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.uitil;
import java.lang.reflect.ParameterizedType;

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
    @GetMapping("/count")
        public List<NASAParam> nasaCount(@RequestParam (value ="count", defaultValue = "") String count){
            RestTemplate nasaCount = new RestTemplate();
            List<NASAParam> countResult = nasaCount.getForObject("https://api.nasa.gov/planetary/apod?api_key=HrgUnKEFOtxVlQkjXZvMtLyNfSnstgpnsLHcd83N&count=" + count, ParameterizedType <List<NASAParm> > );
            return countResult;
        }

}
