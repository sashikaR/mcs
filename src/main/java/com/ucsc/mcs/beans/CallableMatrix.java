package com.ucsc.mcs.beans;

import com.ucsc.mcs.beans.matrix.MatrixObject;
import com.ucsc.mcs.beans.matrix.ResponseMatrix;

import java.util.concurrent.Callable;

/**
 * Created by sr40351 on 1/20/19.
 */
public class CallableMatrix implements Callable<ResponseMatrix> {
    final MatrixObject matrixObj;

    public CallableMatrix(MatrixObject matrixObj) {
        this.matrixObj = matrixObj;
    }

    @Override
    public ResponseMatrix call() throws Exception {
        // calling matrix multiplication
        MatrixServiceImpl matrixService = new MatrixServiceImpl();
        ResponseMatrix responseMatrix= matrixService.multiplyMatrix(matrixObj);
        return responseMatrix;
    }
}
