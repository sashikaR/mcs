package com.ucsc.mcs.beans.matrix;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Rows {
    @JsonProperty("value")
    private String value;

    public String getValues ()
    {
        return value;
    }

    public void setValues (String value)
    {
        this.value = value;
    }

    @Override
    public String toString()
    {
        return "[value = "+value+"]";
    }
}
