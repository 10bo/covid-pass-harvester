import React, { Component } from "react";
import QrReader from "react-web-qr-reader";
const base45 = require("base45");
const cbor = require("cbor");
const pako = require("pako");

class Scanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 100,
      result: null,
    };

    this.handleScan = this.handleScan.bind(this);
  }

  handleScan(data) {
    if (data) {
      const body = data.data.substr(4);
      const decodedData = base45.decode(body);
      const output = pako.inflate(decodedData);
      const results = cbor.decodeAllSync(output);
      const [,, cbor_data] = results[0].value;
      const passData = cbor.decodeAllSync(cbor_data);
      const passDataFinal = passData[0].get(-260).get(1);

      console.log(passDataFinal);
      alert(
        `${passDataFinal.nam.gn}${passDataFinal.nam.fn} - DOB: ${passDataFinal.dob}`
      );
      this.setState({
        result: passDataFinal,
      });
    }
  }
  handleError(err) {
    console.error(err);
  }
  render() {
    const previewStyle = {
      height: 240,
      width: 320,
    };

    return (
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
        />
        <p>
          {this.state.result ? (
            <React.Fragment>
              Name: {this.state.result.nam.gn + this.state.result.nam.fn}
              <br />
              DoB: {this.state.result.dob}
              <br />
              Doses: {this.state.result.v.length} of {this.state.result.v[0].sd}
              <br />
            </React.Fragment>
          ) : (
            "No result."
          )}
        </p>
      </div>
    );
  }
}

export default Scanner;
