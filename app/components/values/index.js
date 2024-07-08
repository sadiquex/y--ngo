import {
  ValueBtn,
  ValueCaption,
  ValueCard,
  ValueIcon,
  ValuesContainer,
  ValuesVideoContainer,
  ValueTitle,
  ValuesVideoTitle,
  ValuesVideo,
  ValuesCardsContainer,
} from "./ValuesStyles";
import Image from "next/image";
import missionIcon from "/public/images/values/mission-icon.png";
import visionIcon from "/public/images/values/vision-icon.png";
import historyIcon from "/public/images/values/history-icon.png";

const valuesArray = [
  {
    bgImage: "/images/values/mission-bg.png",
    valueIcon: missionIcon,
    valueTitle: "Mission",
    valueCaption:
      "Lorem ipsum dolor sit amet consectetur. Cum mattis dictum facilisi duis nulla natoque elementum in. Tellus ac egestas sed viverra enim ut ornare malesuada id. Odio urna tincid......",
  },
  {
    bgImage: "/images/values/vision-bg.png",
    valueIcon: visionIcon,
    valueTitle: "Vision",
    valueCaption:
      "Lorem ipsum dolor sit amet consectetur. Cum mattis dictum facilisi duis nulla natoque elementum in. Tellus ac egestas sed viverra enim ut ornare malesuada id. Odio urna tincid......",
  },
  {
    bgImage: "/images/values/history-bg.png",
    valueIcon: historyIcon,
    valueTitle: "History",
    valueCaption:
      "Lorem ipsum dolor sit amet consectetur. Cum mattis dictum facilisi duis nulla natoque elementum in. Tellus ac egestas sed viverra enim ut ornare malesuada id. Odio urna tincid......",
  },
];

export default function Values() {
  return (
    <ValuesContainer>
      <ValuesCardsContainer>
        {/* values */}
        {valuesArray.map((value, i) => (
          <ValueCard key={i} $bgImage={value.bgImage}>
            <ValueIcon>
              <Image
                src={value.valueIcon}
                alt={value.valueTitle}
                height={70}
                width={70}
              />
            </ValueIcon>
            <ValueTitle>{value.valueTitle}</ValueTitle>
            <ValueCaption>{value.valueCaption}</ValueCaption>
            <ValueBtn>Read More</ValueBtn>
          </ValueCard>
        ))}
      </ValuesCardsContainer>
      {/* video */}
      <ValuesVideoContainer>
        <ValuesVideoTitle>
          Lorem ipsum dolor sit amet consectetur. Vulputate praesent blandit in
        </ValuesVideoTitle>
        <ValuesVideo>
          <Image
            src={"/images/values/video-thumbnail.png"}
            alt="Our video"
            fill
          />
        </ValuesVideo>
      </ValuesVideoContainer>
    </ValuesContainer>
  );
}
