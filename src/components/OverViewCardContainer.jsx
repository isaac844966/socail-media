/* eslint-disable react/prop-types */
import OverveiwCard from "./OverveiwCard";
import Wrapper from "../assets/Wrappers/OverviewCardWrapper";
import { overviewCardData } from "../assets/data";

const OverViewCardContainer = ({ theme }) => {
  return (
    <Wrapper>
      <>
        <h1 className={theme ? "darkText" : "lightText"}>Overview - Today</h1>

        <div className="wrapper">
          {overviewCardData.map((card, index) => (
            <OverveiwCard
              key={index}
              name={card.name}
              icon={card.icon}
              counts={card.counts}
              day={card.day}
              color={card.color}
              theme={theme}
            />
          ))}
        </div>
      </>
    </Wrapper>
  );
};

export default OverViewCardContainer;
