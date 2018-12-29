package main

import (  
    "fmt"
)

func transpose(x [][]int, trans chan [][]int) {
	out := make([][]int, len(x[0]))
	for i := 0; i < len(x); i += 1 {
		for j := 0; j < len(x[0]); j += 1 {
			out[j] = append(out[j], x[i][j])
		}
	}
	trans <- out
}

func multiply(x, y [][]int,multi chan [][]int) {
	// if len(x[0]) != len(y) {
	// 	multiply <- nil, errors.New("Can't do matrix multiplication.")
	// }

	out := make([][]int, len(x))
	for i := 0; i < len(x); i++ {
		out[i] = make([]int, len(y[0]))
		for j := 0; j < len(y[0]); j++ {
			for k := 0; k < len(y); k++ {
				out[i][j] += x[i][k] * y[k][j]
			}
		}
	}
	multi <- out
}

func main() {
	X := [][]int{
		[]int{1, 3},
		[]int{4,6},
	}

	w := [][]int{
		[]int{5,2},
		[]int{5,8},
	}
	
	trans := make(chan [][]int)
	multi := make(chan [][]int)
	go transpose(w,trans)
	W := <-trans
	go multiply(X,W,multi)
	R := <-multi
	fmt.Println("Multiply output", R)
}