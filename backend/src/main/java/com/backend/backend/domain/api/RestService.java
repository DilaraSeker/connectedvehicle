package com.backend.backend.domain.api;

import com.backend.backend.domain.models.VehicleDetail;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.client.RestTemplate;

@Service
public class RestService {

    private final String URI = "https://api.mercedes-benz.com/experimental/connectedvehicle/v2/";
    private RestTemplate restTemplate;

    public RestService(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.build();
    }

    public ResponseEntity doGetRequestWithJwt(String endPoint, Class responseEntity,String jwt){

        HttpHeaders headers = getHeaders();
        headers.add("authorization", jwt);

        HttpEntity request = new HttpEntity(headers);

        ResponseEntity resp = this.restTemplate.exchange(endPoint, HttpMethod.GET,request,responseEntity);
        if(resp.getStatusCode() == HttpStatus.OK){
            return resp;
        }
        else{
            // Error
        }
        return resp;
    }

    public HttpHeaders getHeaders(){

        HttpHeaders headers = new HttpHeaders();
        headers.set("Auth", "a");
        return headers;
    }




}
