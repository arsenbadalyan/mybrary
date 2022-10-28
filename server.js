import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';
import path from 'path';
import mongoose from 'mongoose';
// Router Imports
import indexRouter from './routes/index.js';

//
const app = express();
const viewsPath = path.resolve('views');
app.set('view engine', 'ejs');
app.set('views', viewsPath);
app.set('layout', 'layouts/layout');
app.use(express.static('public'));
app.use(expressEjsLayouts);

// Connect to DB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('Connected MongoDB'));

// Router
app.use('/', indexRouter);

app.listen(process.env.PORT || 5001);
