import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.add = this.add.bind(this);
  }

  add() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }

  render() {
    const { count } = this.state;
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
    return (
      <Container fluid>
        <Container className="p-5 my-5">
          <Table bordered className="p-5">

            <tbody>
              <tr>
                <td colSpan="4" className="bg-secondary p-4 text-end text-white w-100">
                  {count}
                </td>
              </tr>

              {buttons.map((row) => (
                <tr key={row[0]}>

                  {row.map((butt, ind) => (

                    <td
                      key={butt}
                      colSpan={determineColSpan(row, ind)}
                      className={determineBgColor(row, ind)}
                    >
                      <Button variant={determineButtonVar(row, ind)} className="w-100">
                        {butt}
                      </Button>
                    </td>

                  ))}
                </tr>

              ))}

            </tbody>

          </Table>

        </Container>

      </Container>
    );
  }
}
export default Calculator;
