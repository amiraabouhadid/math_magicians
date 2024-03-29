import React, { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import calculate from '../logic/calculate';
import CalcButtons from './CalcButtons';
import Display from './Display';

const Calculator = () => {
  const [calcObject, setCalcObject] = useState([{
    total: 0,
    next: null,
    operation: null,
  }]);

  const {
    total, next, operation,
  } = calcObject;

  const displayString = (total, operation, next) => {
    if (total && !operation && !next) {
      return total;
    }

    if (!total && !operation && next) {
      return next;
    }

    if (total && operation && !next) {
      return total + operation;
    }

    if (!total && operation && next) {
      return total + operation + next;
    }

    if (total && operation && next) {
      return total + operation + next;
    }

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
    setCalcObject(calculate(obj, buttonName));
  };

  return (
    <Container fluid>
      <Container className="py-2">
        <Table bordered className="">

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
              calcObj={calcObject}
            />
          </tbody>

        </Table>

      </Container>

    </Container>
  );
};
export default Calculator;
