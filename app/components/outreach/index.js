import Counter from "./Counter";
import {
  OutreachCard,
  OutreachCardsContainer,
  OutreachContainer,
  OutreachLocation,
  OutreachNumber,
  Outreachquote,
  OutreachWrapper,
} from "./Outreach";

export default function Outreach() {
  return (
    <OutreachContainer>
      <OutreachWrapper>
        <OutreachCardsContainer>
          {/* card one */}
          <OutreachCard>
            <OutreachNumber>
              <Counter value={120} direction="up" />+
            </OutreachNumber>
            <OutreachLocation>Schools equipped</OutreachLocation>
          </OutreachCard>
          {/* card two */}
          <OutreachCard>
            <OutreachNumber>
              <Counter value={2000} direction="up" />+
            </OutreachNumber>
            <OutreachLocation>Children</OutreachLocation>
          </OutreachCard>
          {/* card three */}
          <OutreachCard>
            <OutreachNumber>
              <Counter value={6000} direction="up" />+
            </OutreachNumber>
            <OutreachLocation>Books provided</OutreachLocation>
          </OutreachCard>
        </OutreachCardsContainer>
        <Outreachquote>
          “We are proudly putting smiles on children&apos;s faces and yes, we
          will not stop.”
        </Outreachquote>
      </OutreachWrapper>
    </OutreachContainer>
  );
}
