import json
from matrixMul import multiplyMatrixParallel 
from matrixMul import multiplyMatrix
from array import *

def getMatrixFromRows(rows):
	R = []
	i=0
	for row in rows:
		value = row['value']
		R.append(value)
		i=i+1
	return R

def getResultMatrixHolder(coloumnSize, rowSize):
	print "coloumn size"
	print coloumnSize
	print "row size"
	print rowSize
	C =[]
	k =[]
	for j in range(coloumnSize):
		k.append(0)
	#print k
	for i in range (rowSize):
		C.append(k)
	print C
	return C


def getJsonValues(req_data):
	print "In apiJson..."

	RequestId = req_data['requestId']
	MatrixOne_Rows = req_data['matrixOne']['rows']
	MatrixOne_Rows_Count = len(MatrixOne_Rows)
   
	MatrixOne = getMatrixFromRows(MatrixOne_Rows)
	print MatrixOne
	one = MatrixOne
	MatrixTwo_Rows = req_data['matrixTwo']['rows']
	MatrixTwo_Coloumn = req_data['matrixTwo']['columnCount']  
	MatrixTwo = getMatrixFromRows(MatrixTwo_Rows)
	print MatrixTwo
	two = MatrixTwo
	result_holder = getResultMatrixHolder(MatrixTwo_Coloumn,MatrixOne_Rows_Count)
	answer = result_holder
	R = multiplyMatrix(one,two,answer)
	print "Multiplication Result:"
	print("Printing result: \n")
	for r in R:
		print(r)
	return json.dumps(R)



