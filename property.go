package main

import "fmt"

type address struct {
	line string
	city string
	postal_code string
	state_code string
	state string
	country string
	lat float32
	lon float32
}
type rent struct {
	id int
	rent int
	address string
}

type property struct {
	price int
	rent
	address
}

func propertyTypeMap() {
	RealityMolePropertyType := map[string]string {
		"apartment" : "Apartment",
		"condo" :"Condo",
		"multi_family" : "Duplex-Triplex",
		"single_family" : "Single Family",
		"townhouse" :"Townhouse",
	}
	printPropertyType(RealityMolePropertyType)
}

func printPropertyType(p map[string]string) {
	for x, y := range p {
		fmt.Println("Name for a given ", x, "is", y)
	}
}

