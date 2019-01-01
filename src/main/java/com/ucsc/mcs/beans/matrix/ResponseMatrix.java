package com.ucsc.mcs.beans.matrix;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;

/**
 * Created by sr40351 on 12/12/18.
 */
public class ResponseMatrix {

    @JsonProperty("requestId")
    private String requestId;

    @JsonProperty("rows")
    private int[][] rows;

    public void setRequestId(String requestId) {
        this.requestId = requestId;
    }

    public void setRows(int[][] rows) {
        this.rows = rows;
    }

    public String getRequestId() {
        return requestId;
    }

    public int[][] getRows() {
        return rows;
    }

}
