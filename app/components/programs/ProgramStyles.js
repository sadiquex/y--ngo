import styled from "styled-components";

export const ProgramsWrapper = styled.div`
  background: #f9ebff;
  padding: 6rem 0;
`;

export const ProgramsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media (max-width: 768px) {
    /* background-color: pink; */
    padding: 0 1rem;
  }
`;

export const ProgramsTitle = styled.h2`
  font-size: 48px;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ProgramCardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    overflow-x: auto;
    padding: 1rem 0;
  }
`;

export const ProgramCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    min-width: 300px;
  }
`;

export const ProgramImageWrapper = styled.div`
  height: 190px;
  position: relative;
`;

export const ProgramTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.4rem;
`;

export const ProgramTitle = styled.h3`
  font-size: 1.4rem;
  white-space: nowrap;
`;

export const ProgramDesc = styled.p`
  font-size: 1.2rem;
  font-family: var(--font-outfit);
  font-weight: lighter;
`;

export const ProgramBtn = styled.button`
  border: 2px solid #af34ea;
  background: transparent;
  color: #af34ea;
  padding: 1rem 2rem;
  border-radius: 2rem;
  cursor: pointer;
`;
