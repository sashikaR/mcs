package com.ucsc.mcs.test;


import com.ucsc.mcs.beans.MatrixServiceImpl;
import com.ucsc.mcs.beans.matrix.*;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import static org.junit.Assert.assertEquals;
import java.util.ArrayList;

/**
 * Created by sr40351 on 12/31/18.
 */
public class MatrixTest {

    private final String requestId= "AA01";
    private MatrixServiceImpl matrixServiceImpl = new  MatrixServiceImpl();

    @Test
    public void testMultiplyMatrix(){
        final MatrixObject matrixObject = getMatrixObject();
        final int[][] expectResult = new int[2][2];
        expectResult[0][0] =1;
        expectResult[0][1] =13;
        expectResult[1][0] =2;
        expectResult[1][1] =6;

        final ResponseMatrix resultMatrix = matrixServiceImpl.multiplyMatrix(matrixObject);
        assertEquals("Response requestId is invalid",requestId,resultMatrix.getRequestId());
        assertEquals("Result matrix is invalid",expectResult,resultMatrix.getRows());
    }

    @Test
    public void testMultiplyMatrixInMultiThreads(){
        final MatrixObject matrixObject = getMatrixObject();
        final int[][] expectResult = new int[2][2];
        expectResult[0][0] =1;
        expectResult[0][1] =13;
        expectResult[1][0] =2;
        expectResult[1][1] =6;

        final ResponseMatrix resultMatrix = matrixServiceImpl.multiplyMatrixInMultiThreaded(matrixObject);
        assertEquals("Response requestId is invalid",requestId,resultMatrix.getRequestId());
        assertEquals("Result matrix is invalid",expectResult,resultMatrix.getRows());
    }

    private MatrixObject getMatrixObject(){
        MatrixObject matrixObject = new MatrixObject();
        matrixObject.setRequestId(requestId);
        matrixObject.setMatrixOne(getMatrixOne());
        matrixObject.setMatrixTwo(getMatrixTwo());
        return matrixObject;
    }

    private MatrixOne getMatrixOne(){
        Rows row1 =getRow("1,6");
        Rows row2 =getRow("2,2");

        MatrixOne one = new MatrixOne();
        one.setRows(getRowsList(row1,row2));
        one.setColumnCount(2);
        return one;
    }

    private MatrixTwo getMatrixTwo(){
        Rows row1 = getRow("1,1");
        Rows row2 = getRow("0,2");

        MatrixTwo two = new MatrixTwo();
        two.setRows(getRowsList(row1,row2));
        two.setColumnCount(2);
        return two;
    }

    private ArrayList<Rows> getRowsList(Rows ... rows){
        ArrayList<Rows> rowsList = new ArrayList<>();
        for(Rows row :rows){
            rowsList.add(row);
        }
        return rowsList;
    }

    private Rows getRow(String values){
        Rows rows = new Rows();
        rows.setValues(values);
        return rows;
    }


}
