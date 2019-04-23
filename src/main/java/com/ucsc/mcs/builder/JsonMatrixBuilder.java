package com.ucsc.mcs.builder;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.PrintStream;
import java.util.Random;

public class JsonMatrixBuilder {
    private static  int matrixOneRows = 3;
    private static  int matrixOneColumns = 2;

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
        JSONObject requestObjt = new JSONObject();
        requestObjt.put("requestId",123);
        requestObjt.put("matrixOne",getMatrixOne());
        requestObjt.put("matrixTwo", getMatrixTwo());

        String jsonRequest = requestObjt.toString();

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

    private JSONObject getMatrixOne(){
        JSONObject matrixOne = new JSONObject();
        matrixOne.put("columnCount",matrixOneColumns);
//        matrixOne.add("rows", getRows(matrixOneRows,matrixOneColumns));
        matrixOne.put("rows", getIntRows(matrixOneRows,matrixOneColumns));
        return matrixOne;
    }

    private JSONObject getMatrixTwo(){
        JSONObject matrixTwo = new JSONObject();
        matrixTwo.put("columnCount",matrixTwoColumns);
//        matrixTwo.add("rows", getRows(matrixTwoRows,matrixTwoColumns));
        matrixTwo.put("rows", getIntRows(matrixTwoRows,matrixTwoColumns));
        return matrixTwo;
    }

    private JSONArray getRows(int numRows,int numColumns){
        JSONArray rows = new JSONArray();
        for(int i=0; i< numRows;i++){
            JSONObject matrixRow = new JSONObject();
            matrixRow.put("value",generateValues(numColumns));
            rows.put(matrixRow);
        }
        return rows;
    }

    private JSONArray getIntRows(int numRows,int numColumns){
        JSONArray rows = new JSONArray();
        for(int i=0; i< numRows;i++){
            JSONObject matrixRow = new JSONObject();
            matrixRow.put("value", generateIntValues(numColumns));
//            matrixRow.addProperty("value", String.valueOf(intRow));
            rows.put(matrixRow);
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

    private JSONArray generateIntValues(int numColumns){
        JSONArray arr = new JSONArray();
        for(int i=0; i<numColumns;i++){
            arr.put(getRandomNumber());
        }
        return arr;
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
