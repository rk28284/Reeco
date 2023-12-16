import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addPurchaseproduct } from "../Redux/action";

export const AddItem = ({ onClose }) => {
  const dispatch = useDispatch();
  const [itemName, setItemName] = useState("");
  const [itemImg, setItemImg] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState("");

  const handleAddItem = async () => {
    try {
      const payload = {
        product: itemName,
        img: itemImg,
        brand: brand,
        price: parseFloat(price),
        quantity: parseInt(quantity),
        status: status
      };

      await dispatch(addPurchaseproduct(payload));
      
      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StyledAddItemContainer>
      <InputLabel>Product Name:</InputLabel>
      <InputField
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />

      <InputLabel>Product Image URL:</InputLabel>
      <InputField
        type="text"
        value={itemImg}
        onChange={(e) => setItemImg(e.target.value)}
      />

      <InputLabel>Brand:</InputLabel>
      <InputField
        type="text"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />

      <InputLabel>Price:</InputLabel>
      <InputField
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <InputLabel>Quantity:</InputLabel>
      <InputField
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      {/* Add a new select tag for status */}
      <InputLabel>Status:</InputLabel>
      <SelectField
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">Select Status</option>
        <option value="approved">Approved</option>
        <option value="missing">Missing</option>
      </SelectField>

      <ButtonContainer>
        <PrimaryButton onClick={handleAddItem}>Add Item</PrimaryButton>
        <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>
      </ButtonContainer>
    </StyledAddItemContainer>
  );
};

const StyledAddItemContainer = styled.div`
  padding: 20px;
  max-width: 400px;
  margin: auto;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  color: black;
  font-size: 16px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
`;

const SelectField = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const BaseButtonStyles = `
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
`;

const PrimaryButton = styled.button`
  ${BaseButtonStyles}
  color: #fff;
  background-color: #28a745;
`;

const SecondaryButton = styled.button`
  ${BaseButtonStyles}
  color: #fff;
  background-color: #dc3545;
`;
