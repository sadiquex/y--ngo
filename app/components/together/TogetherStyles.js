import styled from "styled-components";

export const TogetherContainer = styled.div`
  background: url("/images/together/together.png");

  height: 60dvh;

  position: relative;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  color: #fff;
  padding: 3rem;
`;

export const TogetherWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;
`;

export const TogetherTitle = styled.h2`
  font-size: 64px;
  width: 50%;
`;

export const TogetherBtn = styled.button`
  background: #af34ea;
  color: #fff;
  font-size: 1rem;
  padding: 1rem 2rem;
  border-radius: 2rem;
  cursor: pointer;
`;
