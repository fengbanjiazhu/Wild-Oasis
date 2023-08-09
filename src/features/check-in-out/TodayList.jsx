import React from "react";
import styled from "styled-components";
import TodayItem from "./TodayItem";

const TodayListWithActivity = styled.ul`
  overflow: scroll;
  overflow-x: hidden;

  /* Removing scrollbars for webkit, firefox, and ms, respectively */
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const NoActivity = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
`;

function TodayList({ activities }) {
  if (activities?.length < 1) return <NoActivity>No activity today... </NoActivity>;

  return (
    <TodayListWithActivity>
      {activities.map((activity) => (
        <TodayItem activity={activity} key={activity.id} />
      ))}
    </TodayListWithActivity>
  );
}

export default TodayList;
