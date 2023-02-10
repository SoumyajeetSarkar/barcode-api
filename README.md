#Returns a base64 encoded Image Data of barcode.
## Only GET method accepted.
## EndPoint: (port of hosted server)/loogia/getBarcode
## *Requirements: 
headers: 
{
  api_key: *required*
}
query:
{
  slip_number: *required*
}
