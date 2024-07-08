import Image from "next/image";
import {
  VolunteerBtn,
  VolunteerCaption,
  VolunteerContainer,
  VolunteerImageWrapper,
  VolunteerTextWrapper,
  VolunteerTitle,
} from "./VolunteerStyles";

export default function Volunteer() {
  return (
    <VolunteerContainer>
      <VolunteerImageWrapper>
        <Image src={"/images/volunteer/union.png"} alt="Union image" fill />
      </VolunteerImageWrapper>
      <VolunteerTextWrapper>
        <VolunteerTitle>Volunteer With Us</VolunteerTitle>
        <VolunteerCaption>
          Lorem ipsum dolor sit amet consectetur. Cum mattis dictum facilisi
          duis nulla natoque elementum in. Tellus ac egestas sed viverra enim ut
          ornare malesuada id. Odio urna tincid......
        </VolunteerCaption>
        <VolunteerBtn>Get Started</VolunteerBtn>
      </VolunteerTextWrapper>
    </VolunteerContainer>
  );
}
