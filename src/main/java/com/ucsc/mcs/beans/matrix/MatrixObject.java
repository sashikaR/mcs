package com.ucsc.mcs.beans.matrix;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MatrixObject {

        @JsonProperty("requestId")
        private String requestId;

        @JsonProperty("matrixOne")
        private MatrixOne matrixOne;

        @JsonProperty("matrixTwo")
        private MatrixTwo matrixTwo;

        public String getRequestId ()
        {
            return requestId;
        }

        public void setRequestId (String requestId)
        {
            this.requestId = requestId;
        }

        public MatrixOne getMatrixOne ()
        {
            return matrixOne;
        }

        public void setMatrixOne (MatrixOne matrixOne)
        {
            this.matrixOne = matrixOne;
        }

        public MatrixTwo getMatrixTwo ()
        {
            return matrixTwo;
        }

        public void setMatrixTwo (MatrixTwo matrixTwo)
        {
            this.matrixTwo = matrixTwo;
        }

        @Override
        public String toString()
        {
            return "[requestId = "+requestId+", matrixOne = "+matrixOne+", matrixTwo = "+matrixTwo+"]";
        }
}
