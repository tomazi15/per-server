const express = require('express');
const app = express();
const apiRouter = require('./routes/books')

    app.use(express.json());
    app.use('/api/books', apiRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));