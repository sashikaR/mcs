package com.ucsc.mcs.beans.matrix;

public class MatrixObject {

        private String requestId;

        private MatrixOne matrixOne;

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
            return "ClassPojo [requestId = "+requestId+", matrixOne = "+matrixOne+", matrixTwo = "+matrixTwo+"]";
        }
}
