/* eslint-disable react/prop-types */
import CardFollowers from "./CardFollowers";
import Wrapper from "../assets/Wrappers/OverviewCardWrapper";
import { cardData } from "../assets/data";

const CardFollowersWrapper = ({ theme }) => {
  return (
    <Wrapper>
      <div className="wrapper">
        {cardData.map((card, index) => (
          <CardFollowers
            key={index}
            name={card.name}
            icon={card.icon}
            counts={card.counts}
            followersSubcribers={card.followersSubcribers}
            day={card.day}
            color={card.color}
            className={card.className}
            theme={theme}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default CardFollowersWrapper;
