import React from "react";
import styled from "styled-components";
import { PageSytles } from "../../styles/globalStyles";

const Container = styled.div`
  ${PageSytles}
`;

const IndicatorList = () => {
  return <Container>
    <div className="container">
      <h1>Indicator List goes here!</h1>
    </div>
  </Container>;
};

export default IndicatorList;
