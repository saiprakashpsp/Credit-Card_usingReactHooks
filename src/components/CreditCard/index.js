// Write your code here
import {useState} from 'react'

import {
  CCAppContainer,
  CreditCardContainer,
  CreditCardInformationContainer,
  InfoContainer,
  CardContainer,
  Heading,
  CardHolderName,
  HorizontalLine,
  PaymentMethod,
  InputBox,
  CardNumber,
  CardName,
  DetailsContainer,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')
  const onChangeSetCardName = event => {
    setCardName(event.target.value.toUpperCase())
  }
  const onChangeSetCardNumber = event => {
    setCardNumber(event.target.value)
  }

  return (
    <CCAppContainer>
      <CreditCardContainer>
        <Heading>CREDIT CARD</Heading>
        <HorizontalLine />
        <CardContainer data-testid="creditCard">
          <DetailsContainer>
            <CardNumber>{cardNumber}</CardNumber>
            <CardHolderName>CARDHOLDER NAME</CardHolderName>
            <CardName>{cardName}</CardName>
          </DetailsContainer>
        </CardContainer>
      </CreditCardContainer>
      <CreditCardInformationContainer>
        <InfoContainer>
          <PaymentMethod>Payment Method</PaymentMethod>
          <InputBox
            type="text"
            value={cardNumber}
            onChange={onChangeSetCardNumber}
            placeholder="Card Number"
          />
          <InputBox
            type="text"
            value={cardName}
            onChange={onChangeSetCardName}
            placeholder="Cardholder Name"
          />
        </InfoContainer>
      </CreditCardInformationContainer>
    </CCAppContainer>
  )
}

export default CreditCard
