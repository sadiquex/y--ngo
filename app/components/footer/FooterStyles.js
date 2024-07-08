import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #5c5c5c;
  padding: 4rem 0;
`;

export const FooterWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  font-family: var(--font-outfit);
  color: #fff;
`;

export const FooterTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterNav = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const FooterLi = styled.li`
  cursor: pointer;
`;

export const DonationBtn = styled.button`
  border-radius: 2rem;
  padding: 1rem 2rem;
  background: #af34ea;
  color: #fff;
  border: 0;
`;

export const LogoAndIcons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const SocialAndPolicy = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  gap: 1rem;
`;

export const Socials = styled.div`
  display: flex;
  gap: 8px;
`;

export const Policy = styled.div`
  display: flex;
  gap: 1rem;
`;
