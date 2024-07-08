import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  /* background: pink; */
  margin: 0 auto;
  padding: 1rem 0;
  font-family: var(--font-outfit);
`;

export const Logo = styled.div`
  flex: 1;
`;

export const NavElements = styled.ul`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`;

export const NavItem = styled.li`
  font-size: 1rem;
  white-space: nowrap;
  cursor: pointer;
`;

export const CTA = styled.button`
  background: #af34ea;
  color: #fff;
  border-radius: 9999px;
  border: none;
  outline: none;
  padding: 1rem 2.4rem;
  font-size: 1rem;
`;
