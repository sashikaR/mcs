package com.ucsc.mcs.beans;

import com.ucsc.mcs.beans.matrix.MatrixObject;
import com.ucsc.mcs.beans.matrix.MatrixOne;
import com.ucsc.mcs.beans.matrix.MatrixTwo;
import com.ucsc.mcs.beans.matrix.Rows;

import java.util.ArrayList;

public interface MatrixService {
    public String multiplyMatrix(MatrixObject matrixObj);

    public MatrixOne getMatrixOne(ArrayList<Rows> rows);

    public MatrixTwo getMatrixTwo(ArrayList<Rows> rows);


    public Rows getARow(String values);
}
