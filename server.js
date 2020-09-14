const app = require("express")();
const bodyParser = require('body-parser');
const path = require('path');

require('dotenv').config();

const db = require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const authRoutes = require('./routes/auth');

app.use("/auth", authRoutes);

// app.use(express.static(path.join(__dirname + '/front_end/build')));
// app.use('/*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/front_end/build/index.html'));
// });

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
