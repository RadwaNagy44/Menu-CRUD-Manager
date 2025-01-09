const express = require('express');
const app = express();
const menuRoutes = require('./routes/menuRoutes');
app.use(express.json());
app.use('/api/menu', menuRoutes);

app.listen(5000, () => {
    console.log('listening on port 5000');
})