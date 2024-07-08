import styled from "styled-components";

export const ValuesContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 6rem 0;
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

export const ValuesCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

export const ValueCard = styled.div`
  background-size: contain;
  background: url(${(props) => props.$bgImage});
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 0;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

export const ValueIcon = styled.div`
  border-radius: 50%;
  background: #fff;
  padding: 1rem;
`;

export const ValueTitle = styled.p`
  font-family: var(--font-outfit);
  font-size: 1.6rem;
  font-weight: 500;
`;

export const ValueCaption = styled.p`
  font-size: 1.1rem;
  font-family: var(--font-outfit);
  font-weight: lighter;
  width: 80%;
`;

export const ValueBtn = styled.button`
  background: #fff;
  padding: 1rem 3rem;
  outline: 0;
  border: 0;
  border-radius: 2rem;
`;

export const ValuesVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* width: 100%; */
`;

export const ValuesVideoTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  font-size: 48px;
`;

export const ValuesVideo = styled.div`
  height: 600px;
  width: 100%;
  position: relative;
`;
