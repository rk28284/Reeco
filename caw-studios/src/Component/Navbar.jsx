import { useState } from "react";
import styled from "styled-components";
import cart from "../Asset/cart.png";

export const Navbar = () => {
    const [isMenu, setMenu] = useState(false);
//apply humburger-responsiveness
    const toggleMenu = () => {
      setMenu(!isMenu);
    };
  
    return (
      <NavbarContainer>
        <div style={{ display: "flex", alignItems: "center",justifyContent:"space-around" ,
      }}>
          <Brand>Reeco</Brand>
          <Menu>
            <MenuItem>Store</MenuItem>
            <MenuItem>Order</MenuItem>
            <MenuItem>Analytics</MenuItem>
          </Menu>
        </div>
        <div>
          <CartContainer>
            <img
              src={cart}
              width={"40px"}
              style={{
                marginRight: "20px",
              }}
            />
            <h2 style={{ color: "#fff", fontWeight: "500" }}>Hello, John Doe</h2>
          </CartContainer>
        </div>
        {isMenu && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <MenuItem>Store</MenuItem>
            <MenuItem>Order</MenuItem>
            <MenuItem>Analytics</MenuItem>
          </div>
        )}
      </NavbarContainer>
    );
}

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgb(9, 121, 105);
  padding: 11px 31px;
  font-family: sans-serif;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  &:hover {
    background-color: rgba(0, 92, 80, 0.94);
  }
`;

const Brand = styled.h1`
  color: #fff;
  font-size: 24px; 
  font-weight: 900; 
  font-family: cursive;
  margin-right: 32px;
  margin-bottom: 15px;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  align-items: center;
`;

const MenuItem = styled.h2`
  color: #fff;
  font-weight: 530;
  margin-right: 40px;
  
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: yellow; 
  }
`;

const CartContainer = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    transform: scale(1.1);
  }
`;



