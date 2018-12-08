package com.ucsc.mcs.beans.matrix;

public class Rows {
    private String values;

    public String getValues ()
    {
        return values;
    }

    public void setValues (String values)
    {
        this.values = values;
    }

    @Override
    public String toString()
    {
        return "ClassPojo [values = "+values+"]";
    }
}
