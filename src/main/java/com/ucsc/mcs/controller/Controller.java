package com.ucsc.mcs.controller;


import com.ucsc.mcs.beans.MatrixServiceImpl;
import com.ucsc.mcs.beans.Welcome;
import com.ucsc.mcs.beans.matrix.MatrixObject;
import com.ucsc.mcs.beans.matrix.ResponseMatrix;
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
    public ResponseEntity<ResponseMatrix> multiplyMatrix(@RequestBody MatrixObject matrixObj) throws Exception{
        System.out.println("Received :"+matrixObj.toString());
        ResponseMatrix response = matrixServiceImpl.multiplyMatrix(matrixObj);
        return new ResponseEntity<ResponseMatrix>(response, HttpStatus.OK);
    }

    @RequestMapping(value = "/matrix/m", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<ResponseMatrix> multiplyMatrixMultiThread(@RequestBody MatrixObject matrixObj) throws Exception{
        System.out.println("Received :"+matrixObj.toString());
        System.out.println("Processing with multi-threaded :");
        ResponseMatrix response = matrixServiceImpl.multiplyMatrixInMultiThreaded(matrixObj);
        return new ResponseEntity<ResponseMatrix>(response, HttpStatus.OK);
    }

    @RequestMapping(value = "/matrix/af", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<ResponseMatrix> multiplyMatrixInSingleCore(@RequestBody MatrixObject matrixObj) throws Exception{
        System.out.println("Received :");
        System.out.println("Processing in single core:");
        ResponseMatrix response =matrixServiceImpl.multiplyMatrixInSingleCore(matrixObj);
        return new ResponseEntity<ResponseMatrix>(response, HttpStatus.OK);
    }

}
