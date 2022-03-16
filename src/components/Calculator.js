/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Container, Table } from 'react-bootstrap';
import calculate from '../logic/calculate';
import CalcButtons from './CalcButtons';
import Display from './Display';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,

    };
  }

  render() {
    const {
      total, next, operation,
    } = this.state;

    const displayString = (total, operation, next) => {
      // 8 diff combos (000 and 010 have the same outcome)
      // 101 is unncessary
      // 100
      if (total && !operation && !next) {
        return total;
      }
      // 001
      if (!total && !operation && next) {
        return next;
      }
      // 110
      if (total && operation && !next) {
        return total + operation;
      }
      // 011
      if (!total && operation && next) {
        return total + operation + next;
      }

      // 111
      if (total && operation && next) {
        return total + operation + next;
      }
      // 000 & 010
      return '0';
    };
    const buttons = [['AC', '+/-', '%', '÷'], ['7', '8', '9', 'x'], ['4', '5', '6', '-'], ['1', '2', '3', '+'], ['0', '.', '=']];
    const determineColSpan = (row, ind) => {
      if (row.length < 4 && ind === 0) {
        return '2';
      }
      return '1';
    };
    const determineBgColor = (row, ind) => {
      if (ind === row.length - 1) {
        return 'bg-warning';
      }
      return 'bg-light';
    };

    const determineButtonVar = (row, ind) => {
      if (ind === row.length - 1) {
        return 'warning';
      }
      return 'light';
    };
    const calculateTotal = (obj, buttonName) => {
      this.setState(calculate(obj, buttonName));
    };

    return (
      <Container fluid>
        <Container className="p-5 my-5">
          <Table bordered className="p-5">

            <tbody>
              <tr>
                <td colSpan="4" className="bg-secondary p-4 text-end text-white w-100">
                  <Display text={displayString(total, operation, next)} />
                </td>
              </tr>

              <CalcButtons
                buttons={buttons}
                calculateTotal={calculateTotal}
                determineColSpan={determineColSpan}
                determineBgColor={determineBgColor}
                determineButtonVar={determineButtonVar}
                calcObj={this.state}
              />
            </tbody>

          </Table>

        </Container>

      </Container>
    );
  }
}
export default Calculator;
