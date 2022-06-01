package main

import (
	"testing"
)

func TestNewUser(t *testing.T) {
	testUser := me {
		_id: "61975a77f25626d3530d733f", 
		email : "53863c83-f221-4a8f-b70c-73fa9a5a6932@guest.com", 
		sub : "53863c83-f221-4a8f-b70c-73fa9a5a6932", 
		subscriptionType : "G1", 
		downPayment : 25, 
		interestRate : 3.5, 
		loanYear : 30, 
		subscriptionHistory: nil, 
		calculatedPropertyList : nil, 
		favoritePropertyList : nil, 
		searchedQueryList : nil, 
	}
	// Test Email
	testUserEmail := testUser.getEmail()
	expectedEmail := "53863c83-f221-4a8f-b70c-73fa9a5a6932@guest.com" 
	if testUserEmail != expectedEmail{
		t.Errorf("Expected user email to be" + expectedEmail + " but got %v", testUserEmail)
	}

	// Proper way to do it
	// We should get the pointer and update the pointer
	testUserPointer := &testUser // &variable Give me the memory address of the value this variable is pointing at
	testUserPointer.updateSubscriptionType("P3") 
	if testUserPointer.getSubscriptionType() != "P3" {
		t.Errorf("Expected subscription type to be P3 after update but got %v", testUser.getSubscriptionType())
	}

	// Test update subscription - shortcut way
	newSubscriptionType := "P1"
	testUser.updateSubscriptionType(newSubscriptionType)
	if testUser.getSubscriptionType() != newSubscriptionType {
		t.Errorf("Expected subscription type to be " + newSubscriptionType + " after update but got %v", testUser.getSubscriptionType())
	}
}	