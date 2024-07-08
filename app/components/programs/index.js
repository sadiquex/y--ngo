import Image from "next/image";
import {
  ProgramBtn,
  ProgramCard,
  ProgramCardsContainer,
  ProgramDesc,
  ProgramImageWrapper,
  ProgramsContainer,
  ProgramsTitle,
  ProgramsWrapper,
  ProgramTextWrapper,
  ProgramTitle,
} from "./ProgramStyles";

export default function Programs() {
  return (
    <ProgramsWrapper>
      <ProgramsContainer>
        <ProgramsTitle>Our recent programs</ProgramsTitle>
        <ProgramCardsContainer>
          {/* teen programming */}
          <ProgramCard>
            <ProgramImageWrapper>
              <Image
                src={"/images/programs/teen-programming.png"}
                alt="Teen Programming"
                fill
              />
            </ProgramImageWrapper>
            <ProgramTextWrapper>
              <ProgramTitle>Teen Programming</ProgramTitle>
              <ProgramDesc>
                Lorem ipsum dolor sit amet consectetur. Cum mattis dictum
                facilisi duis nulla natoque elementum in. Tellus ac egestas sed
                viverra enim ut ornare malesuada id. Odio urna tincid......
              </ProgramDesc>
              <ProgramBtn>Read More</ProgramBtn>
            </ProgramTextWrapper>
          </ProgramCard>
          {/* milo quiz */}
          <ProgramCard>
            <ProgramImageWrapper>
              <Image
                src={"/images/programs/quiz.png"}
                alt="Milo Quiz Competition"
                fill
              />
            </ProgramImageWrapper>
            <ProgramTextWrapper>
              <ProgramTitle>Milo Quiz Competition</ProgramTitle>
              <ProgramDesc>
                Lorem ipsum dolor sit amet consectetur. Cum mattis dictum
                facilisi duis nulla natoque elementum in. Tellus ac egestas sed
                viverra enim ut ornare malesuada id. Odio urna tincid......
              </ProgramDesc>
              <ProgramBtn>Read More</ProgramBtn>
            </ProgramTextWrapper>
          </ProgramCard>

          {/* uniform */}
          <ProgramCard>
            <ProgramImageWrapper>
              <Image
                src={"/images/programs/uniform.png"}
                alt="1 Child, 1 Uniform"
                fill
              />
            </ProgramImageWrapper>
            <ProgramTextWrapper>
              <ProgramTitle>1 Child, 1 Uniform</ProgramTitle>
              <ProgramDesc>
                Lorem ipsum dolor sit amet consectetur. Cum mattis dictum
                facilisi duis nulla natoque elementum in. Tellus ac egestas sed
                viverra enim ut ornare malesuada id. Odio urna tincid......
              </ProgramDesc>
              <ProgramBtn>Read More</ProgramBtn>
            </ProgramTextWrapper>
          </ProgramCard>

          {/* feeding day */}
          <ProgramCard>
            <ProgramImageWrapper>
              <Image
                src={"/images/programs/feeding.png"}
                alt="Teen Programming"
                fill
              />
            </ProgramImageWrapper>
            <ProgramTextWrapper>
              <ProgramTitle>Hopeful Feeding Day</ProgramTitle>
              <ProgramDesc>
                Lorem ipsum dolor sit amet consectetur. Cum mattis dictum
                facilisi duis nulla natoque elementum in. Tellus ac egestas sed
                viverra enim ut ornare malesuada id. Odio urna tincid......
              </ProgramDesc>
              <ProgramBtn>Read More</ProgramBtn>
            </ProgramTextWrapper>
          </ProgramCard>
        </ProgramCardsContainer>
      </ProgramsContainer>
    </ProgramsWrapper>
  );
}
