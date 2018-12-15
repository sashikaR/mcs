package com.ucsc.mcs.beans;

import com.ucsc.mcs.beans.matrix.*;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;


@Component
public class MatrixServiceImpl implements MatrixService{

    @Override
    public ResponseMatrix multiplyMatrix(MatrixObject matrixObj) {
        MatrixOne matrixOne = matrixObj.getMatrixOne();
        MatrixTwo matrixTwo = matrixObj.getMatrixTwo();

        final int matrixOneRowCount=matrixOne.getRows().size();
        final int matrixOneColumnCount=matrixOne.getColumnCount();

        final int matrixTwoRowCount=matrixTwo.getRows().size();
        final int matrixTwoColumnCount=matrixTwo.getColumnCount();

//        System.out.println("Matrix Two column :"+matrixTwoColumnCount);

        int[][] matrixOneArray = matrixOne.getRowsAsIntArray(matrixOne.getRows());
        int[][] matrixTwoArray = matrixTwo.getRowsAsIntArray(matrixTwo.getRows());

        printArray(matrixOneArray, "MatrixOne");
        printArray(matrixTwoArray, "MatrixTwo");

        int[][] responseRows = multiplyMatrices(matrixOneArray,matrixTwoArray,matrixOneRowCount,matrixOneColumnCount,matrixTwoColumnCount);

        ResponseMatrix response = new ResponseMatrix();
        response.setRequestId(matrixObj.getRequestId());
        response.setRows(responseRows);
        return response;
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

    public Rows getARow(int[] values){
        String row = Arrays.toString(values);
        Rows rows = new Rows();
        rows.setValues(row);
        return rows;
    }

    public int[] getIntArray(String values){
        String[] valuesList = values.split(",");
        int[] intList = new  int[valuesList.length];
        int i=0;
        for(String a :valuesList){
            intList[i] = Integer.parseInt(a);
            i=i+1;
        }
        return intList;
    }

    private int[][] multiplyMatrices(int[][] matrixOne, int[][] matrixTwo, int r1, int c1, int c2) {
        // Mutliplying Two matrices
        int[][] product = new int[r1][c2];
        for(int i = 0; i < r1; i++) {
            for (int j = 0; j < c2; j++) {
                for (int k = 0; k < c1; k++) {
                    product[i][j] += matrixOne[i][k] * matrixTwo[k][j];
                }
            }
        }
        printArray(product,"Result");
     return product;
    }

    private void  printArray(int[][] matrixProduct, String label){
        // Displaying the result
        System.out.println("Printing matrix: "+label);
        for(int[] row : matrixProduct) {
            for (int column : row) {
                System.out.print(column + "    ");
            }
            System.out.println();
        }

    }
    
}
