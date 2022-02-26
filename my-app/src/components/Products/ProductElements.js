import styled from "styled-components";
import BackgroundPic from "../../images/dark_background.png";

export const PauseOnHoverBackground = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${BackgroundPic});
`;

export const ProductsContainer = styled.div`
  width: 99vw;
  min-height: 100vh;
  padding: 5rem calc((100vh - 1300px) / 2);
  // background: #150f0f;
  background: #3e4444;
  color: #fff;
`;
export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;
export const ProductCard = styled.div`
  margin: 1rem 2rem;
  line-height: 2;
  width: 200px;
  box-shadow: 5px 5px #fdc500;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }
`;

export const ProductCard2 = styled.div`
  margin: 1rem auto;
  background: #3e4444;
  line-height: 1.5;
  width: 75%;
  box-shadow: 5px 5px #fdc500;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }
`;

export const ProductImg = styled.img`
  height: 200px;
  min-width: 200px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
`;

export const ProductImg2 = styled.img`
  height: 200px;
  margin: 0 auto;
  min-width: 200px;
  max-width: 75%;
  box-shadow: 8px 8px #fdc500;
`;
export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-botton: 5rem;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
`;
export const ProductDesc = styled.p`
  margin-bottom: 0rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 0.1rem;
  font-size: 1.6rem;
  color: #fdc500;
`;
export const ProductButton = styled.button`
  font-size: 1.2rem;
  padding: 0.2rem 0.5rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    color: #000;
  }
`;
