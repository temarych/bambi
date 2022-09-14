import React from "react";
import styled from "styled-components";
import MovieShowcase from "./components/MovieShowcase";
import GlobalStyle from "./GlobalStyle";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <App.Wrapper>
        <MovieShowcase />
      </App.Wrapper>
    </React.Fragment>
  );
}

App.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  > * {
    margin: auto;
  }
`;

export default App;