const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');

dotenv.config();
app.use(express.json());

mongoose
  .connect('mongodb://localhost:27017/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log('Database Connected ...'))
  .catch((err) => console.log(err));

app.use('/api/auth', authRoute);

port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port} ...`);
});
