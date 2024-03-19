import styled from 'styled-components'

export const CCAppContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const CreditCardContainer = styled.div`
  background-color: #3b4b69;
  background-size: cover;
  min-height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CreditCardInformationContainer = styled.div`
  background-color: #ffffff;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const InfoContainer = styled.div`
  background-color: #ffffff;
  background-size: cover;
  box-shadow: 2px 2px 2px 2px #c3cad9;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
  margin-left: 130px;
`

export const CardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  height: 350px;
  width: 80%;
  border-radius: 45px;
  margin: 10px;
  margin-top: 100px;
  display: flex;
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 150px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  margin-bottom: -5px;
  margin-top: -45px;
`
export const CardHolderName = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 16px;
`
export const HorizontalLine = styled.hr`
  border: 2px solid #ffd773;
  width: 40%;
`

export const PaymentMethod = styled.h1`
  font-family: 'Roboto';
  color: #3b4b69;
  font-size: 20px;
  font-weight: bold;
`

export const InputBox = styled.input`
  height: 30px;
  width: 300px;
  border: 1px solid #c3cad9;
  outline: none;
  margin-bottom: 25px;
  padding-left: 15px;
  font-size: 14px;
`
export const CardNumber = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 26px;
`
export const CardName = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 22px;
`