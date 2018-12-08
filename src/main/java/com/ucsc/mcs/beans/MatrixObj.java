package com.ucsc.mcs.beans;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.annotation.JsonSetter;

import java.util.ArrayList;

@JsonPropertyOrder({ "requestId", "matrixOne", "matrixTwo" })
public class MatrixObj {


    public MatrixObj(String requestId, MatrixOne matrixOne, MatrixTwo matrixTwo) {
        this.requestId = requestId;
        this.matrixOne = matrixOne;
        this.matrixTwo = matrixTwo;
    }

    public MatrixObj(){}

    @Override
    public String toString( ) {
        return "MatrixObj{" +
                "requestId='" + requestId + '\'' +
                ", matrixOne=" + matrixOne +
                ", matrixTwo=" + matrixTwo +
                '}';
    }

    private String requestId;

    private MatrixOne matrixOne;

    @JsonGetter("123")
    public String getRequestId( ) {
        return requestId;
    }

    @JsonSetter
    public void setRequestId(String requestId) {
        this.requestId = requestId;
    }

    @JsonGetter
    public MatrixOne getMatrixOne( ) {
        return matrixOne;
    }

    @JsonSetter
    public void setMatrixOne(MatrixOne matrixOne) {
        this.matrixOne = matrixOne;
    }

    @JsonGetter
    public MatrixTwo getMatrixTwo( ) {
        return matrixTwo;
    }

    @JsonSetter
    public void setMatrixTwo(MatrixTwo matrixTwo) {
        this.matrixTwo = matrixTwo;
    }

    private MatrixTwo matrixTwo;


    public class MatrixOne{
        private ArrayList<Rows> rows;

        public ArrayList<Rows> getRows( ) {
            return rows;
        }

        public void setRows(ArrayList<Rows> rows) {
            this.rows = rows;
        }

    }

    public class MatrixTwo{
        public ArrayList<Rows> getRows( ) {
            return rows;
        }

        public void setRows(ArrayList<Rows> rows) {
            this.rows = rows;
        }

        private ArrayList<Rows> rows;

    }

    public class Rows{
        public Rows(String values) {
            this.values = values;
        }
        public String getValues( ) {
            return values;
        }

        public void setValues(String values) {
            this.values = values;
        }

        private String values;
    }


}
