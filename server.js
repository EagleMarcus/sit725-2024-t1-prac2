let express = require('express');
let app = express();
let port = 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Route to add two numbers
app.get('/addTwoNumbers', (req, res) => {
  // 1. Get the values from the URL parameter
  let value1 = req.query.num1;
  let value2 = req.query.num2;

  // 2. Perform the calculation
  let result = parseInt(value1) + parseInt(value2);

  // 3. Return the response
  let response = {
    data: result,
    statusCode: 200,
    message: 'success'
  };
  res.json(response);
});