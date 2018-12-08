package com.ucsc.mcs.beans;

import java.util.ArrayList;

public interface MatrixService {
    public String multiplyMatrix(MatrixObj matrixObj);

    public MatrixObj.MatrixOne getMatrixOne(ArrayList<MatrixObj.Rows> rows);

    public MatrixObj.MatrixTwo getMatrixTwo(ArrayList<MatrixObj.Rows> rows);

    public MatrixObj getMatrix(final String id, final MatrixObj.MatrixOne matrixOne,
                               final MatrixObj.MatrixTwo matrixTwo);

    public MatrixObj.Rows getARow(String values);
}
