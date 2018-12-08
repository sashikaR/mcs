package com.ucsc.mcs.beans.matrix;

import java.util.ArrayList;

public class MatrixOne {
    private ArrayList<Rows> rows;

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
        return "ClassPojo [rows = "+rows+"]";
    }
}
