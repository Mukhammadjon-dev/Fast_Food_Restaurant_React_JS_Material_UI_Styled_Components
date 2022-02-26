import styled from "styled-components";
import FeaturePic from "../../images/PicturePizza1.jpg";

export const InfoContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${FeaturePic});
  height: 100vh;
  max-height: 550px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;

  h1 {
    margin-top: 15rem;
    font-size: clamp(3rem, 5vw, 5rem);
    background: #e31837;
    color: #fff;
  }
  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
    background: #e31837;
    color: #fff;
    // opacity: 0.7;
  }
`;

export const FeatureButton = styled.button`
font-size: 1.4rem;
padding: 0.6rem 3rem;
border; none;
background: #e31837 ;
color: #fff;
transition: 0.2s eae-out;

&:hover{
    color: #fff;
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
}
`;
