package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

func mainB() {
	if len(os.Args) < 2 {
		log.Fatal("Expected URL as command-line argument")
		os.Exit(1)
	}
	url := os.Args[1]
	fmt.Println(url)
	resp, err := http.Get(url)
	if (err != nil) || (resp.StatusCode != 200) {
		os.Exit(1)
	}
}
