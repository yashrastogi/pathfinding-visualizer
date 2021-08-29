import { Table, TableCell, TableRow, TableBody, Icon } from '@material-ui/core';
import * as MaterialIcon from '@material-ui/icons';

export default function VisualizerGrid(props) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <tbody>
        {props.grid.map((row, ix1) => {
          return (
            <tr key={ix1}>
              {row.map((el, ix2) => {
                return (
                  <td
                    id="grid-cell"
                    style={{
                      border: '1px solid black',
                      backgroundColor: el.visited ? '#a8a8a8' : 'white',
                    }}
                    key={ix2 + ix1 * row.length}>
                    {el.start && <Icon style={{ color: '#333333' }}>home</Icon>}
                    {el.end && <Icon style={{ color: '#333333' }}>exit_to_app</Icon>}
                    {!el.start && !el.end && <Icon></Icon>}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
