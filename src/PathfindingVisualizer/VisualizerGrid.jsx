import { Table, TableCell, TableRow, TableBody } from "@material-ui/core";

let grid = Array.from(Array(50), () => new Array(50));

export default function VisualizerGrid() {
  return (
    <Table>
      <TableBody>
        {grid.map((row, ix1) => {
          return (
            <TableRow key={ix1}>
              {row.map((el, ix2) => {
                return <TableCell key={ix2}>{el}</TableCell>;
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
