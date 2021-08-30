import {Icon} from '@material-ui/core';

export default function VisualizerGrid(props) {
  return (
    <table className="grid">
      <tbody>
        {props.grid.map((row, ix1) => {
          return (
            <tr key={ix1} className="grid-row" id={ix1}>
              {row.map((el, ix2) => {
                return (
                  <td
                    id={ix1 + '-' + ix2}
                    className={el.visited ? 'grid-cell visited' : 'grid-cell'}
                    key={ix2 + ix1 * row.length}
                  >
                    {el.start && <Icon>home</Icon>}
                    {el.end && <Icon>exit_to_app</Icon>}
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
