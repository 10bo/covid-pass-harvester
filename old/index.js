const base45 = require('base45');
const cbor = require('cbor');
const fs = require('fs')
const jpeg = require('jpeg-js');
const jsQR = require("jsqr");
const pako = require('pako');

const getQrData = () => {
    const passJpeg = fs.readFileSync(__dirname + '/example-files/qr.jpg');
    const passImageData = jpeg.decode(passJpeg, {useTArray: true});
    const decodedGreenpass = jsQR(passImageData.data, passImageData.width, passImageData.height);
    return decodedGreenpass;
}

const body = getQrData().data.substr(4);
const decodedData = base45.decode(body);
const output = pako.inflate(decodedData);
const results = cbor.decodeAllSync(output);
[headers1, headers2, cbor_data, signature] = results[0].value;
const passData = cbor.decodeAllSync(cbor_data);
const passDataFinal = passData[0].get(-260).get(1);

console.log(passDataFinal);