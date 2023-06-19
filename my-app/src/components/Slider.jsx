import {ArrowLeftOutlined, ArrowRightOutlined} from "@mui/icons-material";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {sliderItems} from "../data";
import {mobile} from "../responsive";
import {Link} from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({display: "none"})}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: ${(props) => `url(${props.img})`};
  background-size: cover;
  background-position: center;
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  padding-left: 5rem;
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  color: white;
  font-size: 70px;
`;

const Description = styled.p`
  color: white;
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: black;
  cursor: pointer;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: black;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover::before,
  &:focus::before {
    transform: scaleX(1);
  }
  &:hover {
    color: black;
  }
  &:focus {
    color: black;
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : sliderItems.length - 1
      );
    } else {
      setSlideIndex((prevIndex) =>
        prevIndex < sliderItems.length - 1 ? prevIndex + 1 : 0
      );
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide img={item.img} key={item.id}>
            <ImgContainer>{/* <Image src={item.img} /> */}</ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Link
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
                to={`/products/${item.cat}`}
              >
                <Button>SHOP NOW</Button>
              </Link>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
