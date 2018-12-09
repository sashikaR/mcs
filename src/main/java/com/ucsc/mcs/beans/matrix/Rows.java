package com.ucsc.mcs.beans.matrix;

public class Rows {
    private int[] values;

    public int[] getValues ()
    {
        return values;
    }

    public void setValues (int[] values)
    {
        this.values = values;
    }

    @Override
    public String toString()
    {
        return "ClassPojo [values = "+values+"]";
    }
}
