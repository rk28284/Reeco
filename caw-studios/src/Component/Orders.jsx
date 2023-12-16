import React from "react";
import styled from "styled-components";

export const Orders = () => {
  return (
    <OrderContainer>
      <OrderInfo>
        <OrderTitle>Order/Order 32457ABC</OrderTitle>
        <OrderNumber>Order 32457ABC</OrderNumber>
      </OrderInfo>
      <ButtonsContainer>
        <BackButton>Back</BackButton>
        <ApproveButton>Approved Order</ApproveButton>
      </ButtonsContainer>
    </OrderContainer>
  )
}
const OrderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 11px 33px;
  box-shadow: rgba(19, 19, 33, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  
`;

const OrderInfo = styled.div`
    text-align: left;
    margin-bottom: 20px;
    align-self: flex-start; 
  
`;


const OrderTitle = styled.p`
  color: grey;
  font-size: 20px;
  font-weight: 600;
  margin: 0;

  text-decoration: underline;
`;

const OrderNumber = styled.h1`
  font-size: 38px;
  margin-top: 40px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BackButton = styled.button`
  color: rgb(9, 121, 105);
  background-color: #fff;
  border-radius: 30px;
  padding: 12px 20px;
  margin-top: 30%;
`;

const ApproveButton = styled.button`
  background-color: rgb(9, 121, 105);
  color: #fff;
  border-radius: 32px;
  padding: 12px 20px;
  margin-top: 30%;
  margin-left: 21px;
 
`;