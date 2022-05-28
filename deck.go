package main

import (
	"fmt"
	"io/ioutil"
	"math/rand"
	"os"
	"strings"
	"time"
)

// Create a new type of deck which is a slice of string

type deck []string

func newDeck() deck {
	cards := deck{}
	cardSuits := []string{"Spades", "Hearts", "Diamonds", "Clubs"}
	cardValues := []string{"Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "J", "Q", "K"}
	for _, suit := range cardSuits{
		for _, value := range cardValues{
			cards = append(cards, value + " of " +  suit)
		}
	}
	return cards
}

// tells go that we can return two values from this function
func deal(d deck, handSize int) (deck, deck) {
	fmt.Println(d)
	fmt.Println(handSize)
	// to the end of the size, starting to up
	return d[:handSize], d[handSize:]
}

// receiver function
func(d deck) print() {
	fmt.Println(`**************************`)
	for i, card := range d{
		fmt.Println(i, card)
	}
}

func(d deck) toString() string {
	return strings.Join([]string(d), ", ")
}

func(d deck) saveToFile(fileName string) error {
	return ioutil.WriteFile(fileName, []byte(d.toString()),066)
}

func newDeckFromFile (fileName string) deck {
	bs, err := ioutil.ReadFile(fileName)
	if err != nil {
		fmt.Println("Error newDeckFromFile:", err)
		os.Exit(1)	
	}
	 s := strings.Split(string(bs), ", ")
	 return deck(s);
}

func (d deck) shuffle() {
	source := rand.NewSource(time.Now().UnixNano())
	r := rand.New(source)
	for i := range d {
		newPosition := r.Intn(len(d)-1)
		d[i], d[newPosition] = d[newPosition], d[i]
	}
}