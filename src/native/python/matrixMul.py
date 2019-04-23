import multiprocessing 
# Program to multiply two matrices using nested loops

def multiplyMatrix(AList, BList,CList):
	print ("----  A --------")
	print AList
	print ("----  B --------")
	print BList
	print ("----  C --------")
	print CList
	# iterate through rows of X
	for i in range(len(AList)):
		print ("----  A --------")
		print i
		# iterate through columns of Y
		for j in range(len(BList[0])):
			print ("---- B[0] --------")
			print j
		   # iterate through rows of Y
			for k in range(len(BList)):
				CList[i][j] += AList[i][k] * BList[k][j]
				print ("---- C --------")
				print k
				print (CList)
	return CList

def multiplyInnerMatrix(AList, BList, CList, i):
	# iterate through columns of B
		   for j in range(len(BList[0])):
			   # iterate through rows of B
			   for k in range(len(BList)):
				   CList[i][j] += AList[i][k] * BList[k][j]

def multiplyMatrixParallel(AList, BList, CList):
	processes = []
	# iterate through rows of A
	for i in range(len(AList)):
		p = multiprocessing.Process(target=multiplyInnerMatrix(AList, BList, CList, i))
        processes.append(p)
        p.start()

	for process in processes:
		process.join()
	return CList

# 4x2 matrix
X = [[4,4,4,4],
    [4 ,5,6,6]]
# 2x4 matrix
Y = [[7,8],
    [9,10],
    [11,12],
	[8,8]]
# result is 2x2
result = [[0,0],[0,0]]
R = multiplyMatrix(X,Y,result)
print("Printing result: \n")
for r in R:
	   print(r)

