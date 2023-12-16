import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {actionProductData, actionApprovedData} from "../Redux/action";
import search from "../Asset/search.png";
import printer from "../Asset/print.png";
import check from "../Asset/check.png";
import { Crossmark } from "./Crossmark";
import { Editmodel } from "./Editmodel";
import { AddItem } from "./Additem";

export const Product = () => {
  const [isAddItemModalOpen, setAddItemModalOpen] = useState(false);

  const dispatch = useDispatch();
  const productData = useSelector((store) => store?.product);
  console.log(productData);

  
  const handleApproved = async (id) => {
    try {
      await dispatch(actionApprovedData(id));
      await dispatch(actionProductData() )
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    dispatch(actionProductData());
  }, []); 


  return (
    <Container>
      <Header>
        <div>
          <InputContainer>
            <SearchIcon src={search} alt="Search" />
            <SearchInput
              type="text"
              placeholder="Search"
           
             
            />
          </InputContainer>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button style={{ marginRight: "20px" }}
            onClick={() => setAddItemModalOpen(true)}>Add Item</Button>
          <ResponsiveImage src={printer} alt="Printer" />
        </div>
      </Header>
      {isAddItemModalOpen && (
        <AddItem onClose={() => setAddItemModalOpen(false)} />
      )}
      <br />
      <br />
      <Content>
        <div style={{ padding: "10px 20px" }}>
          <Table>
            <thead style={{ background: "#f2f2f2" }}>
              <tr>
                <Th>Product Name</Th>
                <Th>Brand</Th>
                <Th>Price</Th>
                <Th>Quantity</Th>
                <Th>Total</Th>
                <Th>Status</Th>
              </tr>
            </thead>
            <tbody>
              {productData?.map((el) => (
                <tr key={el.id}>
                  <Td>
                    <ResponsiveImage src={el.img} alt={el.product} />
                    {el.product}
                  </Td>
                  <Td>{el.brand}</Td>
                  <Td>{el.price}</Td>
                  <Td>{el.quantity}</Td>
                  <Td>{(el.price * el.quantity).toFixed(2)}</Td>

                  <Td
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <h1
                      style={{
                        color: el.status === "Approved" ? "white" : "black",
                        backgroundColor:
                          el.status === "Approved"
                            ? "green"
                            : el.status === "Missing"
                            ? "orange"
                            : el.status === "Missing-urgent"
                            ? "red"
                            : "#f7f2f2", // You can customize the color for other cases
                        padding: "8px",
                        borderRadius: "15px",
                      }}
                    >
                      {el.status}
                    </h1>
                    <Button
                      onClick={() => handleApproved(el.id)}
                      style={{
                        padding: "10px",
                      }}
                    >
                      <img src={check} width={"20px"} alt="right" />
                    </Button>

                    <Crossmark id={el.id} product={el.product} />

                    <Editmodel
                      id={el.id}
                      product={el.product}
                      price={el.price}
                      quantity={el.quantity}
                      brand={el.brand}
                      total={el.total}
                      img={el.img}
                    />
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
`;

const Header = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  justify-content: space-between;
  padding: 15px 20px;
  background-color: #fff;
  border: 1px solid grey;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 25px;
  overflow: hidden;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 12px 30px;
`;

const SearchIcon = styled.img`
  width: 20px;
  margin: 0 8px;
`;

const Content = styled.div`
  width: 83%;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  color: grey;
  font-weight: 700;
  font-size: 25px;
  padding: 10px;
`;

const Td = styled.td`
  font-size: 20px;
  color: grey;
  padding: 18px 40px;
  text-align: center;
`;

const ResponsiveImage = styled.img`
  width: 30px;
`;

const Button = styled.button`
  color: green;
  border: 1px solid green;
  border-radius: 20px;
  padding: 12px 30px;
  background-color:white;
  font-weight: 800;
`;
