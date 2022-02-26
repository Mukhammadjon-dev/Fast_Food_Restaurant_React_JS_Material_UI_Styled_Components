import styled from "styled-components";
import FeaturePic1 from "../../images/doner_kebab.jpg";
import FeaturePic2 from "../../images/cheeseburger_with_chips.jpg";
import FeaturePic3 from "../../images/club_sandwich.jpg";
import FeaturePic4 from "../../images/Lavash.jpg";
import FeaturePic5 from "../../images/Xot_dog_with_Chips.jpg";

export const FeatureContainer1 = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${FeaturePic1});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;
`;

export const FeatureContainer2 = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${FeaturePic2});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;
`;

export const FeatureContainer3 = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${FeaturePic3});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;
`;

export const FeatureContainer4 = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${FeaturePic4});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;
`;
export const FeatureContainer5 = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${FeaturePic5});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;
`;

export const H1 = styled.h1`
  h1 {
    margin-botton: 5rem;
    font-size: clamp(4rem, 5vw, 5rem);
  }
`;
export const P1 = styled.p`
  p {
    margin-bottom: 1rem;
    font-size: clamp(2rem, 3vw, 2rem);
  }
`;

export const FeatureButton = styled.button`
font-size: 1.4rem;
padding: 0.6rem 3rem;
border; none;
color: white;
background: #e31837;
border-radius: 1rem;

&:hover{
    color: #fff;
    background: #ffc500 ;
    transition: 0.2s ease-out;
    cursor: pointer;
}
`;
