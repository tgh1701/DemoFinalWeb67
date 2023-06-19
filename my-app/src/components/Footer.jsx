import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";
import {mobile} from "../responsive";
import {Link} from "react-router-dom";

const Container = styled.div`
  display: flex;
  ${mobile({flexDirection: "column"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display: "none"})}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({backgroundColor: "#fff8f8"})}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>HIENQLO.</Logo>
        <Description>Low price but quality as Dior</Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Explore</Title>
        <List>
          <Link
            style={{
              color: "black",
              textDecoration: "none",
            }}
            to="/"
          >
            <ListItem>Home</ListItem>
          </Link>
          <Link
            style={{
              color: "black",
              textDecoration: "none",
            }}
            to="/products/men"
          >
            <ListItem>Man</ListItem>
          </Link>
          <Link
            style={{
              color: "black",
              textDecoration: "none",
            }}
            to="/products/women"
          >
            <ListItem>Woman</ListItem>
            <Link
              style={{
                color: "black",
                textDecoration: "none",
              }}
              to="/"
            >
              <ListItem>Kid</ListItem>
            </Link>
          </Link>
        </List>
      </Center>
      <Center>
        <Title>Help</Title>
        <List>
          <ListItem>FAQs</ListItem>
          <ListItem>Track Order</ListItem>
          <ListItem>Returns</ListItem>
          <ListItem>Shipping</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight: "10px"}} />
          Thanh Xuan, Ha Noi
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight: "10px"}} />
          0926886199
        </ContactItem>
        <ContactItem>
          <Mail style={{marginRight: "10px"}} />
          tgh1701@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
