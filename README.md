## Returns a base64 encoded Image Data of barcode.
### Only GET method accepted.
### EndPoint: (port of hosted server)/loogia/getBarcode
### *Requirements: 
headers: 
{
  api_key: *required*
}
query:
{
  slip_number: *required*
}
### Supported formats

![image](https://user-images.githubusercontent.com/93812988/224089896-3a6044b0-9e27-4d8c-8468-81b2ffe22a08.png)

![image](https://user-images.githubusercontent.com/93812988/224090134-823336c6-9341-40ef-880c-081e2d906aa7.png)

![image](https://user-images.githubusercontent.com/93812988/224090438-fee0cd74-ba08-40a2-8c91-e2d2aec13e16.png)

![image](https://user-images.githubusercontent.com/93812988/224090585-a0af8ab2-f2fa-4d2b-a315-860aacb336d5.png)

Reference: [lindell/JsBarcode](https://github.com/lindell/JsBarcode/wiki)
