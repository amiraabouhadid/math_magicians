/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/destructuring-assignment */
import { Button } from 'react-bootstrap';
import React, { Component } from 'react';

class CalcButtons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      buttons, calculateTotal, determineColSpan, determineBgColor, determineButtonVar, calcObj,
    } = this.props;
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
  }
}
export default CalcButtons;
