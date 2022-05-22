import React from "react";
import styled from "styled-components";
import { PageSytles } from "../../styles/globalStyles";

const Container = styled.div`
  ${PageSytles}
`;

export const ServiceDeliveryList = () => {
    return <Container>
        <div className="container">
            <h1>Service Deliveries goes here!</h1>
        </div>
    </Container>;

}
