import { Container } from "@material-ui/core";
import React from "react";
import VisualizerGrid from "./VisualizerGrid";

export default function Home(props) {
  return (
    <React.Fragment>
      <Container>
        <VisualizerGrid></VisualizerGrid>
      </Container>
    </React.Fragment>
  );
}
