import styled from "styled-components";

export const VolunteerContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 6rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  /* border: 2px solid red; */

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const VolunteerImageWrapper = styled.div`
  /* border: 2px solid green; */
  position: relative;
  flex: 1;
  min-height: 425px;

  @media (max-width: 768px) {
    width: 100%;
    /* min-height: 300px; */
  }
`;

export const VolunteerTextWrapper = styled.div`
  /* border: 2px solid blue; */
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    padding: 1rem;
  }
`;

export const VolunteerTitle = styled.h2`
  font-size: 3rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const VolunteerCaption = styled.p`
  font-size: 1.4rem;
  font-family: var(--font-outfit);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const VolunteerBtn = styled.button`
  padding: 1rem 3rem;
  background: #af34ea;
  color: #fff;
  border-radius: 2rem;
  font-size: 1.2rem;
  outline: 0;
  border: 0;
`;
