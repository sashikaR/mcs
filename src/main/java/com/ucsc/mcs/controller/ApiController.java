package com.ucsc.mcs.controller;

import com.ucsc.mcs.beans.MatrixObj;
import com.ucsc.mcs.beans.MatrixServiceImpl;
import com.ucsc.mcs.beans.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ApiController {

    @Autowired private MatrixServiceImpl matrixServiceImpl ;

    @RequestMapping(value = "/user", method = RequestMethod.GET)
    public ResponseEntity<List<User>> listAllUsers(){
        User user1 = new User("LL001");
        user1.setEmail("shamila@gmail.com");
        user1.setName("Shamila");

        User user2 = new User("LL002");
        user2.setEmail("rangani@gmail.com");
        user2.setName("Rangani");

        List<User> userList = new ArrayList<>();
        userList.add(user1);
        userList.add(user2);
        return new ResponseEntity<List<User>>(userList, HttpStatus.OK);
    }

    @RequestMapping(value = "/matrix", method = RequestMethod.GET)
    public ResponseEntity<MatrixObj> multiplyMatrix(){
        MatrixObj.Rows row1 = matrixServiceImpl.getARow("12,11,13,5");
        MatrixObj.Rows row2 = matrixServiceImpl.getARow("2,0,0,5");
        MatrixObj.Rows row3 = matrixServiceImpl.getARow("12,30,60,95");

        ArrayList<MatrixObj.Rows> rowsList = new ArrayList<>();
        rowsList.add(0,row1);
        rowsList.add(1,row2);
        rowsList.add(2,row3);

        MatrixObj.MatrixOne matrixOne = matrixServiceImpl.getMatrixOne(rowsList);
        MatrixObj matrixObj = matrixServiceImpl.getMatrix("123",matrixOne,null);

        return new ResponseEntity<MatrixObj>(matrixObj, HttpStatus.OK);
    }


}
