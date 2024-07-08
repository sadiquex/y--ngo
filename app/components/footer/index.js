import React from "react";
import {
  DonationBtn,
  FooterContainer,
  FooterLi,
  FooterNav,
  FooterTop,
  FooterWrapper,
  LogoAndIcons,
  Policy,
  SocialAndPolicy,
  Socials,
} from "./FooterStyles";
import Image from "next/image";
import logo from "/public/images/logo.png";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        {/* top */}
        <FooterTop>
          <FooterNav>
            <FooterLi>About Us</FooterLi>
            <FooterLi>Our Programs</FooterLi>
            <FooterLi>Get Involved</FooterLi>
            <FooterLi>Gallery</FooterLi>
            <FooterLi>Contact Us</FooterLi>
          </FooterNav>
          <FooterNav>
            <FooterLi>How to Get Started</FooterLi>
            <FooterLi>
              <DonationBtn>Make a Donation</DonationBtn>
            </FooterLi>
          </FooterNav>
        </FooterTop>

        {/* down */}
        <FooterTop>
          <LogoAndIcons>
            <Image src={logo} alt="Y! logo" height={74} width={74} />
            <SocialAndPolicy>
              <Socials>
                <span>
                  <Image
                    src={"/images/footer/facebook.png"}
                    alt="facebook"
                    height={18}
                    width={9}
                  />
                </span>
                <span>
                  <Image
                    src={"/images/footer/twitter.png"}
                    alt="twitter"
                    height={18}
                    width={18}
                  />
                </span>
                <span>
                  <Image
                    src={"/images/footer/instagram.png"}
                    alt="instagram"
                    height={16}
                    width={16}
                  />
                </span>
                <span>
                  <Image
                    src={"/images/footer/youtube.png"}
                    alt="youtube"
                    height={14}
                    width={20}
                  />
                </span>
              </Socials>
              <Policy>
                <p>Privacy Policy</p>
                <p>Work for us</p>
              </Policy>
            </SocialAndPolicy>
          </LogoAndIcons>
          {/* right */}
          <p>2024, Hopeful. All Rights Reserved</p>
        </FooterTop>
      </FooterWrapper>
    </FooterContainer>
  );
}
