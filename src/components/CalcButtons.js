import { Button } from 'react-bootstrap';
import React from 'react';
import PropTypes from 'prop-types';

const CalcButtons = (props) => {
  const {
    buttons, calculateTotal, determineColSpan, determineBgColor, determineButtonVar, calcObj,
  } = props;
  return (
    buttons.map((row) => (

      <tr key={row[0]}>
        {row.map((butt, ind) => (

          <td
            key={butt}
            colSpan={determineColSpan(row, ind)}
            className={determineBgColor(row, ind)}
          >
            <Button
              value={butt}
              onClick={(e) => {
                e.preventDefault(); calculateTotal(calcObj, e.target.value);
              }}
              variant={determineButtonVar(row, ind)}
              className="w-100"
            >
              {butt}
            </Button>
          </td>

        ))}
      </tr>

    ))
  );
};
CalcButtons.propTypes = {
  buttons: PropTypes.InstanceOf(Array).isRequired,
  calculateTotal: PropTypes.func.isRequired,
  determineColSpan: PropTypes.func.isRequired,
  determineBgColor: PropTypes.func.isRequired,
  determineButtonVar: PropTypes.func.isRequired,
  calcObj: PropTypes.shape({ calcObj: PropTypes.string.isRequired }),
};
export default CalcButtons;
