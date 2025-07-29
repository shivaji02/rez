const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const merchantRoutes = require('./routes/merchant');
const bookingRoutes = require('./routes/booking');
const walletRoutes = require('../Backend/routes/wallet');


const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/merchants', merchantRoutes);
app.use('/bookings', bookingRoutes);
app.use('/wallet', walletRoutes);


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
app.listen(PORT, '10.0.102.35', () => {
  console.log(`>>>>>Server is running at http://10.0.102.35:${PORT}<<<<<<<<`);

});


