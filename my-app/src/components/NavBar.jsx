import {Search} from "@mui/icons-material";
import {Badge} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import React from "react";
import styled from "styled-components";
import {mobile} from "../responsive";
import {Link, useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {logout} from "../redux/apiCalls";

const Container = styled.div`
  position: sticky;
  top: 0;
  height: 60px;
  border-bottom: 1px solid gray;
  box-shadow: 0 1px 2px rgb(0 0 0 / 12%), 0 4px 12px rgb(0 0 0 / 9%);
  ${mobile({height: "50px"})};
  background-color: white;
  z-index: 1000;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({padding: "10px 0px"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-style: 14px;
  cursor: pointer;
  ${mobile({display: "none"})}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  &:focus {
    outline-color: black;
  }
  ${mobile({width: "50px"})}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({fontSize: "20px"})}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex: 2, justifyContent: "center"})}
`;

const MenuItem = styled.div`
  font-style: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize: "12px", marginLeft: "10px"})}
`;

const NavBar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(dispatch);
  };

  const handleCheckout = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    console.log(token);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ENG</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{color: "gray", fontSize: 16}} />
          </SearchContainer>
        </Left>
        <Center>
          <Link
            style={{
              color: "black",
              textDecoration: "none",
            }}
            to="/"
          >
            <Logo>HIENQLO.</Logo>
          </Link>
        </Center>
        {user ? (
          <Right>
            <MenuItem>HI, {user.username}</MenuItem>
            <Link
              style={{
                color: "black",
                textDecoration: "none",
              }}
              to="/"
              onClick={handleLogout}
            >
              <MenuItem>LOG OUT</MenuItem>
            </Link>
            <Link to="/cart">
              <MenuItem>
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </MenuItem>
            </Link>
          </Right>
        ) : (
          <Right>
            <Link
              style={{
                color: "black",
                textDecoration: "none",
              }}
              to="/register"
            >
              <MenuItem>REGISTER</MenuItem>
            </Link>
            <Link
              style={{
                color: "black",
                textDecoration: "none",
              }}
              to="/login"
            >
              <MenuItem>SIGN IN</MenuItem>
            </Link>
            <Link to="/login">
              {" "}
              <MenuItem onClick={handleCheckout}>
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </MenuItem>
            </Link>
          </Right>
        )}
      </Wrapper>
    </Container>
  );
};

export default NavBar;
