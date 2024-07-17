import styled from "styled-components";

export const HeroContainer = styled.div`
  background: url("/images/hero/hero-image.png");

  position: relative;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  color: #fff;

  @media (max-width: 768px) {
    padding: 1rem;
    height: auto;
  }
`;

export const HeroTextContainer = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Tagline = styled.h2`
  font-size: 72px;
  font-family: var(--font-clash);
  text-align: center;
  width: 70%;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 3rem;
  }
`;

export const BePartBtn = styled.button`
  background: #efe3fc;
  color: #af34ea;
  padding: 8px 1rem;
  border-radius: 2rem;
`;

export const HeroSubtext = styled.p`
  font-size: 1rem;
  font-family: var(--font-outfit);
  font-weight: normal;
  width: 50%;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    /* padding: 0 1rem; */
  }
`;

export const HeroCTA = styled.button`
  padding: 1rem 2rem;
  border-radius: 2rem;
  border: 0;
  background: #af34ea;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  z-index: 100;

  &:hover {
    color: #af34ea;
    border: 2px solid #af34ea;
  }

  &:hover:before {
    -webkit-transform: scaleY(1);
    -ms-transform: scaleY(1);
    transform: scaleY(1);
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.5;
    background: #af34ea;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    -webkit-transform: scaleY(0);
    -ms-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transform-origin: left top;
    -ms-transform-origin: left top;
    transform-origin: left top;
  }

  &:hover:after {
    -webkit-transition-delay: 0.2s;
    -o-transition-delay: 0.2s;
    transition-delay: 0.2s;
    -webkit-transform: scaleY(1);
    -ms-transform: scaleY(1);
    transform: scaleY(1);
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: #fff;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    -webkit-transform: scaleY(0);
    -ms-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transform-origin: left top;
    -ms-transform-origin: left top;
    transform-origin: left top;
  }
`;
