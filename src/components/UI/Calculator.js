import React from 'react';
import '../css/style.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <table align="center" className="bg__color container">
          <tbody>
            <tr>
              <td className="bg__color">
                <input type="text" name="Input" size="35" id="display" />
                <br />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>
                <input type="button" name="ac" value=" AC " />
                <input type="button" name="plus/minus" value="+/- " />
                <input type="button" name="percentage" value=" % " />
                <input
                  type="button"
                  name="add"
                  className="btnTop assignment__operators"
                  value=" + "
                />
                <br />
                <input type="button" name="seven" value=" 7" />
                <input type="button" name="eight" value=" 8 " />
                <input type="button" name="nine" value=" 9 " />
                <input
                  type="button"
                  name="mul"
                  value=" x "
                  className="assignment__operators"
                />
                <br />
                <input type="button" name="four" value=" 4 " />
                <input type="button" name="five" value=" 5 " />
                <input type="button" name="six" value=" 6 " />
                <input
                  type="button"
                  name="minus"
                  value=" - "
                  className="assignment__operators"
                />
                <br />
                <input type="button" name="one" value=" 1 " />
                <input type="button" name="two" value=" 2 " />
                <input type="button" name="three" value=" 3" />
                <input
                  type="button"
                  name="div"
                  value=" + "
                  className="assignment__operators"
                />
                <br />
                <input
                  type="button"
                  name="zero"
                  value=" 0"
                  className="special__button-zero"
                />
                <input
                  type="button"
                  name="equals"
                  value=" = "
                  className="special__button-equals assignment__operators"
                />
                <br />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calculator;
