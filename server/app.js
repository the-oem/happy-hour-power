const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, '../build')));
console.log('============', __dirname);
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});
// TODO: delete this block of code when build out app.
// This is only for testing if the proxy is working in
// development.

app.get('/api', (req, res) => {
  res.status(200).json({message: `the server is hooked up to port: ${port}`});
});


app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});
