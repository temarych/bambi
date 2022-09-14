import styled from "styled-components";

interface YearMarkerProps {
  year: string | number;
}

const YearMarker = ({ year }: YearMarkerProps) => {
  return (
    <YearMarker.Wrapper>
      <YearMarker.Title>{year}</YearMarker.Title>
    </YearMarker.Wrapper>
  );
}

YearMarker.Title = styled.h2`
  margin: 0;
`;

YearMarker.Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.8em 1em;
  background-color: #F1F1F1;
  color: gray;
  border-radius: 1em;
`;

export default YearMarker;