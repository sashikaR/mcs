package com.ucsc.mcs.beans;

import com.ucsc.mcs.beans.matrix.*;

import java.util.ArrayList;

public interface MatrixService {
    public ResponseMatrix multiplyMatrix(MatrixObject matrixObj);

    public ResponseMatrix multiplyMatrixInMultiThreaded(MatrixObject matrixObj);

    public MatrixOne getMatrixOne(ArrayList<Rows> rows);

    public MatrixTwo getMatrixTwo(ArrayList<Rows> rows);


    public Rows getARow(int[] values);

    public int[] getIntArray(String values);
}
