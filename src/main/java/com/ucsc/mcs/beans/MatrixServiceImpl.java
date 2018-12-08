package com.ucsc.mcs.beans;

import org.springframework.stereotype.Component;

import java.util.ArrayList;


@Component
public class MatrixServiceImpl implements MatrixService{

    @Override
    public String multiplyMatrix(MatrixObj matrixObj) {
        MatrixObj.MatrixOne matrixOne = matrixObj.getMatrixOne();
        MatrixObj.MatrixTwo matrixTwo = matrixObj.getMatrixTwo();
        System.out.println("Recieved matrixOne :"+matrixOne.getRows().get(0).getValues());
        System.out.println("Recieved matrixTwo :"+matrixTwo.getRows().get(0).getValues());
        return null;
    }

    public MatrixObj.MatrixOne getMatrixOne(ArrayList<MatrixObj.Rows> rows){
        MatrixObj matrixObj = new MatrixObj();
        MatrixObj.MatrixOne one = matrixObj.new MatrixOne();
        one.setRows(rows);
        return one;
    }

    public MatrixObj.MatrixTwo getMatrixTwo(ArrayList<MatrixObj.Rows> rows){
        MatrixObj matrixObj = new MatrixObj();
        MatrixObj.MatrixTwo two = matrixObj.new MatrixTwo();
        two.setRows(rows);
        return two;
    }

    public MatrixObj.Rows getARow(String values){
        MatrixObj matrixObj = new MatrixObj();
        MatrixObj.Rows rows = matrixObj.new Rows(values);
        return rows;
    }

    public MatrixObj getMatrix(final String id, final MatrixObj.MatrixOne matrixOne,
                               final MatrixObj.MatrixTwo matrixTwo){
        MatrixObj matrixObj = new MatrixObj(id,matrixOne,matrixTwo);
        return matrixObj;
    }
}
