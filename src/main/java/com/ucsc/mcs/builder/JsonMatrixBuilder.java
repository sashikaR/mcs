package com.ucsc.mcs.builder;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.PrintStream;
import java.util.Random;

public class JsonMatrixBuilder {
    private static  int matrixOneRows = 3;
    private static  int matrixOneColumns = 5;

    private static final int matrixTwoRows =matrixOneColumns;
    private static  int matrixTwoColumns=2;

    public JsonMatrixBuilder(int matrixOneRows1, int matrixOneColumns1, int matrixTwoColumns1){
        matrixOneRows=matrixOneRows1;
        matrixOneColumns=matrixOneColumns1;
        matrixTwoColumns=matrixTwoColumns1;

    }

    public static void main(String[] args){
        JsonMatrixBuilder jsonMatrixBuilder = new JsonMatrixBuilder(100,10,75);
        jsonMatrixBuilder.generateMatrix();

        JsonMatrixBuilder jsonMatrixBuilder1 = new JsonMatrixBuilder(100,10,90);
        jsonMatrixBuilder1.generateMatrix();
    }

    public void generateMatrix(){
        Gson request = new Gson();

        JsonObject requestObjt = new JsonObject();
        requestObjt.addProperty("requestId",123);
        requestObjt.add("matrixOne",getMatrixOne());
        requestObjt.add("matrixTwo", getMatrixTwo());

        String jsonRequest = request.toJson(requestObjt);
        System.out.println("----------------- Json Request ----------------------------------");
        System.out.println(jsonRequest);
        appendToFile(jsonRequest);
    }

    private void appendToFile(final String jsonRequest){
        try{
            PrintStream fileStream = new PrintStream(new FileOutputStream("REQUESTS.CSV",true));
            fileStream.println(jsonRequest);
        }catch (FileNotFoundException fe){
            System.out.println("File not found ...!"+fe.getLocalizedMessage());
        }


    }

    private JsonObject getMatrixOne(){
        JsonObject matrixOne = new JsonObject();
        matrixOne.addProperty("columnCount",matrixOneColumns);
        matrixOne.add("rows", getRows(matrixOneRows,matrixOneColumns));
        return matrixOne;
    }

    private JsonObject getMatrixTwo(){
        JsonObject matrixTwo = new JsonObject();
        matrixTwo.addProperty("columnCount",matrixTwoColumns);
        matrixTwo.add("rows", getRows(matrixTwoRows,matrixTwoColumns));
        return matrixTwo;
    }

    private JsonArray getRows(int numRows,int numColumns){
        JsonArray rows = new JsonArray();
        for(int i=0; i< numRows;i++){
            JsonObject matrixRow = new JsonObject();
            matrixRow.addProperty("value",generateValues(numColumns));
            rows.add(matrixRow);
        }
        return rows;
    }

    private String generateValues(int numColumns){
        String value="";
        for(int i=0; i<numColumns;i++){
            value = value+Integer.toString(getRandomNumber());
            if(i != numColumns-1){
                value=value+",";
            }
        }
        return value;
    }

    private static int getRandomNumber() {
        final int min=0; final int max=50;
        if (min >= max) {
            throw new IllegalArgumentException("max must be greater than min");
        }
        Random r = new Random();
        return r.nextInt((max - min) + 1) + min;
    }

    
}
