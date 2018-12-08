package com.ucsc.mcs.controller;


import com.ucsc.mcs.beans.MatrixObj;
import com.ucsc.mcs.beans.MatrixServiceImpl;
import com.ucsc.mcs.beans.Welcome;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.RequestWrapper;

@RestController
public class Controller {

    private static final String welcomemsg = "Welcome Mr. %s!";
    @Autowired
    private MatrixServiceImpl matrixServiceImpl ;

    @RequestMapping("/")
    @RequestWrapper
    public String index() {
        return "Welcome to the MCS project of 16140912 ..!";
    }

    @GetMapping("/welcome/user")
    @ResponseBody
    public Welcome welcomeUser(@RequestParam(name="name", required=false, defaultValue="Java Fan") String name) {
        return new Welcome(String.format(welcomemsg, name));
    }

    @RequestMapping(value = "/matrix", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<String> multiplyMatrix(@RequestBody MatrixObj matrixObj){
        matrixServiceImpl.multiplyMatrix(matrixObj);
        return new ResponseEntity<String>("object comes", HttpStatus.OK);
    }


}
