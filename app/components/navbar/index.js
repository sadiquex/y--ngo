import Image from "next/image";
import {
  CTA,
  Hamburger,
  Logo,
  NavbarContainer,
  NavElements,
  NavItem,
} from "./NavbarStyles";
import logo from "/public/images/logo.png";

export default function Navbar() {
  return (
    <NavbarContainer>
      {/* left */}
      <Logo>
        <Image src={logo} alt="Y! logo" height={54} width={54} />
      </Logo>

      {/* right */}
      <NavElements>
        <NavItem>About Us</NavItem>
        <NavItem>Our Programs</NavItem>
        <NavItem>Get involved</NavItem>
        <NavItem>Contact Us</NavItem>
        <NavItem>
          <CTA>Donate</CTA>
        </NavItem>
      </NavElements>

      {/* mobile */}
      <Hamburger>=</Hamburger>
    </NavbarContainer>
  );
}
