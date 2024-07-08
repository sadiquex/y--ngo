import {
  BePartBtn,
  HeroContainer,
  HeroCTA,
  HeroSubtext,
  HeroTextContainer,
  Tagline,
} from "./HeroStyles";

export default function Hero() {
  return (
    <HeroContainer>
      <HeroTextContainer>
        <BePartBtn>Be part of something bigger</BePartBtn>
        <Tagline>Every Child Deserves A Quality Education</Tagline>
        <HeroSubtext>
          When you make a donation, your funds go directly to books and school
          supplies that help students attent quality and safe schools.`
        </HeroSubtext>
        <HeroCTA>Make a Donation</HeroCTA>
      </HeroTextContainer>
    </HeroContainer>
  );
}
