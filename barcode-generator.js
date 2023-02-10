//canvas library: https://www.npmjs.com/package/canvas
import { createCanvas } from 'canvas';  //image data を作成するライブラリ

//JsBarcode library: https://www.npmjs.com/package/jsbarcode
import JsBarcode from 'jsbarcode'; //バーコード作成するライブラリ

export const barcodeGenerator = (request) =>{
    var slip_number = request //sample 伝票番号
    
    var canvas = createCanvas(100,100); //create canvas of 100x100 pixels
    JsBarcode(canvas, slip_number); 
    const dataUrl = canvas.toDataURL();
    
    var base64Data = dataUrl.replace(/^data:image\/png;base64,/, ""); //base64 のイメージデータ
    return base64Data;
}


/********************************************Alternate method: Creating SVG string of a barcode************************************/
// const { DOMImplementation, XMLSerializer } = require('xmldom');
// const xmlSerializer = new XMLSerializer();
// const document = new DOMImplementation().createDocument('http://www.w3.org/1999/xhtml', 'html', null);
// const svgNode = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
// var slip_number = '216283515184'

// JsBarcode(svgNode, slip_number, {
//     xmlDocument: document,
// });

// const svgText = xmlSerializer.serializeToString(svgNode);

// console.log(svgText)
/********************************************************************************************************************************* */