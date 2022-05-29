package main

import (
	"testing"
)

func TestNewDeck(t *testing.T) {
	d := newDeck()
	if len(d) != 52{
		t.Errorf("Expected deck length of 52 but got %v", len(d))
	}
	
	if d[0] != "Ace of Spades"{
		t.Errorf("Expected the first card to be Ace of spades but got %v", d[0])
	}

	if d[len(d)-1] != "K of Clubs"{
		t.Errorf("Expected the last card to be K of Clubs but got %v", d[len(d)-1])
	}
}

// Should run as sudo
// func TestSaveToDeckAndNewDeckTestFromFile(t *testing.T) {
// 	os.Remove("_deckTesting")

// 	deck := newDeck()
// 	deck.saveToFile("_deckTesting")
// 	loadedDeck := newDeckFromFile("_deckTesting")

// 	if(len(loadedDeck) != 52) {
// 		t.Errorf("Expected 52 cards in deck, got %v", len(loadedDeck))
// 	}
// 	os.Remove("_deckTesting")
// }