package main

type me struct {
	_id string
	email string
	sub string
	subscriptionType string
	downPayment int
	interestRate float32
	loanYear int16
	subscriptionHistory [] string
	calculatedPropertyList []string
	favoritePropertyList []string
	searchedQueryList []string
}


func (m me) getEmail() string{
	return m.email
}

// &variable Give me the memory address of the value this variable is pointing at
// *pointer: This is a type description - it means we'are working with a pointer to a person 
// *pointerToPerson: This is a operator - it means we want to manipulate the value the pointer is referencing to 
func (pointerToMe *me) updateSubscriptionType(newSubscriptionType string) {
	(*pointerToMe).subscriptionType = newSubscriptionType
}

func (m me) getSubscriptionType() string {
	return m.subscriptionType
}