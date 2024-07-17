"use client";

import Image from "next/image";
import styled from "styled-components";

export default function Delivery() {
  return (
    <DeliveryContainer>
      <Image src={"/images/delivery/delivery.png"} alt="Delivery" fill />
    </DeliveryContainer>
  );
}

const DeliveryContainer = styled.div`
  height: 700px;
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    height: 300px;
  }
`;
