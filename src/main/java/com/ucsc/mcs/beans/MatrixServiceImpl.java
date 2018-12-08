package com.ucsc.mcs.beans;

import com.ucsc.mcs.beans.matrix.MatrixObject;
import com.ucsc.mcs.beans.matrix.MatrixOne;
import com.ucsc.mcs.beans.matrix.MatrixTwo;
import com.ucsc.mcs.beans.matrix.Rows;
import org.springframework.stereotype.Component;

import java.util.ArrayList;


@Component
public class MatrixServiceImpl implements MatrixService{

    @Override
    public String multiplyMatrix(MatrixObject matrixObj) {
        MatrixOne matrixOne = matrixObj.getMatrixOne();
        MatrixTwo matrixTwo = matrixObj.getMatrixTwo();
        System.out.println("Recieved matrixOne :"+matrixOne.getRows());
        System.out.println("Recieved matrixTwo :"+matrixTwo.getRows());
        return null;
    }

    public MatrixOne getMatrixOne(ArrayList<Rows> rows){
        MatrixOne one = new MatrixOne();
        one.setRows(rows);
        return one;
    }

    public MatrixTwo getMatrixTwo(ArrayList<Rows> rows){
        MatrixTwo two = new MatrixTwo();
        two.setRows(rows);
        return two;
    }

    public Rows getARow(String values){
        Rows rows = new Rows();
        rows.setValues(values);
        return rows;
    }
    
}
