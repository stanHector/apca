// import React from 'react';
// import FeatureInfo from '../../components/featuredInfo/FeatureInfo';
// import './home.css';
// import WidgetSm from '../components/widgetSm/WidgetSm'
// import WidgetLg from '../../components/widgetLg/WidgetLg'
// import Topbar from "../../components/topbar/Topbar"
import { PageSytles } from "../../styles/globalStyles";
import styled from "styled-components";

const Container = styled.div`
  ${PageSytles}
`;

const Home = () => {

  return (
    <Container>
      home
      {/* <FeatureInfo allAssets={allAssets} isLoading={isLoading} items={items} />
                <WidgetLg assets={assets} isLoading={isLoading} />
                <WidgetSm /> */}
    </Container>
  );
};

export default Home;
