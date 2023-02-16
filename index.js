import { barcodeGenerator } from "./barcode-generator.js";

import Express from "express";

const app = Express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API is online at http://localhost:${PORT}`);
});

app.get("/loogia/getbarcode", (req, res) => {
  var slip_number = req.query.slip_number; //slip_number for which barcode is generated
  var format = req.query.format || "CODE128"; //default format is CODE128
  res.status(200).send({
    base64data: barcodeGenerator(slip_number,format),
  });
});
