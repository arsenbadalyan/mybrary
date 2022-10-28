import express from 'express';

const indexRouter = express.Router();

indexRouter.route('/').get((req, res) => res.render('hello'));

export default indexRouter;
