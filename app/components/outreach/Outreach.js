import styled from "styled-components";

export const OutreachContainer = styled.div`
  background: #f0cfff;
  padding: 5rem 0;
  display: flex;
  justify-content: center;
`;

export const OutreachWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const OutreachCardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

export const OutreachCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
`;

export const OutreachNumber = styled.h2`
  font-size: 3.2rem;
  font-family: var(--font-clash);
`;

export const OutreachLocation = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  font-family: var(--font-outfit);
`;

export const Outreachquote = styled.p`
  font-family: var(--font-outfit);
  font-size: 1.2rem;
`;
