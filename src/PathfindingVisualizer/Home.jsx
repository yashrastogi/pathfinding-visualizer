import { Container, Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import React from "react";
import VisualizerGrid from "./VisualizerGrid";

export default function Home(props) {
  props.setPage("Home");
  return (
    <React.Fragment>
      <Container>
        <VisualizerGrid></VisualizerGrid>
      </Container>
    </React.Fragment>
  );
}
