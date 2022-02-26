import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: counter;
  font-weight: 700;
`;
export const NavLink = styled(Link)`
  box-shadow: 3px 5px #e9ba23;
  color: white;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #e9ba23;
  }
  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;
export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 2.3rem;
  right: 5rem;
  cursor: pointer;
  color: #fff;
  font-size: 2rem;
  margin-top: -1.5rem;
  box-shadow: -5px 6px #e9ba23;
  color: white;

  &:hover {
    color: #e9ba23;
  }

  @media screen and (min-width: 350px) {
    position: absolute;
    top: 35px;
    right: 10px;
  }
`;
