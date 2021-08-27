import { Table, TableCell, TableRow } from "@material-ui/core";

let grid = Array.from(Array(50), () => new Array(50));

export default function VisualizerGrid() {
  return (
    <Table>
      {grid.map((row) => {
        return (
          <TableRow>
            {row.map((el) => {
              return <TableCell>{el}</TableCell>;
            })}
          </TableRow>
        );
      })}
    </Table>
  );
}
