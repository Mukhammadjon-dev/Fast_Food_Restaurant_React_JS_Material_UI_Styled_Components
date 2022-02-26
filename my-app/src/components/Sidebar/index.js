import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./SidebarElements";
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="#Hero"> Home </SidebarLink>
        <SidebarLink to="#Products"> Foods </SidebarLink>
        <SidebarLink to="#Feature"> Blog </SidebarLink>
        <SidebarLink to="#CarouselComponent"> Day Offer </SidebarLink>
        <SidebarLink to="#PauseOnHover"> Sweets </SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/">Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};
export default Sidebar;
