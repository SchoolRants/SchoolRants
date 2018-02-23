const express = require('express');

const app = express();

const PORT = process.env.NODE_ENV || 3000;

app.get('/', (req, res) => res.json({ ok: 200 }));

/* eslint-disable no-console */
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
