import { barcodeGenerator } from "./barcode-generator.js";

import Express from "express";

const app = Express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API is online at http://localhost:${PORT}`);
  
});

app.get("/loogia/getbarcode", (req, res) => {
  if (req.header("api_key") == process.env.API_KEY) {
    var slip_number = req.query.slip_number;
    res.status(200).send({
      base64data: barcodeGenerator(slip_number),
    });
  }
  else {
    res.send(400).send({
      error: "Invalid Request"
    })
  }
});

