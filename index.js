const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.static('Public'));
app.use('/images', express.static('images'));
app.listen(PORT, () => { console.log(`Running server on PORT ${PORT}...`); })