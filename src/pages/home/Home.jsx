// import React from 'react';
import FeatureInfo from '../../components/featuredInfo/FeatureInfo';
// import './home.css';
// import WidgetSm from '../components/widgetSm/WidgetSm'
// import WidgetLg from '../../components/widgetLg/WidgetLg'
// import Topbar from "../../components/topbar/Topbar"
import styled from "styled-components";
import { PageSytles } from "../../styles/globalStyles";

const Container = styled.div`
  ${PageSytles}
`;

const Home = () => {

  return (
    <Container>
      {/* home */}
      <FeatureInfo />
                {/* <WidgetLg assets={assets} isLoading={isLoading} />
                <WidgetSm /> */}
    </Container>
  );
};

export default Home;
