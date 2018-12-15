package com.ucsc.mcs.beans.matrix;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;

public class MatrixOne {
    @JsonProperty("rows")
    private ArrayList<Rows> rows;

    @JsonProperty("columnCount")
    private int columnCount;

    public ArrayList<Rows> getRows ()
    {
        return rows;
    }

    public void setRows (ArrayList<Rows> rows)
    {
        this.rows = rows;
    }

    @Override
    public String toString()
    {
        return "[columnCount="+columnCount+", rows = "+rows+"]";
    }

    public int[][] getRowsAsIntArray (ArrayList<Rows> rows)
    {
        int numOfRows = rows.size();
        int columnSize= rows.get(0).getValues().split(",").length;
        int[][] rowsAsIntArray = new int[numOfRows][columnSize];
        for(int i=0;i<numOfRows;i++){
            String[] rowData = rows.get(i).getValues().split(",");
            for(int j=0;j<rowData.length;j++){
                int value =Integer.parseInt(rowData[j]);
                rowsAsIntArray[i][j] = value ;
            }
        }
        return rowsAsIntArray;
    }

    public int getColumnCount ()
    {
        return columnCount;
    }
}
