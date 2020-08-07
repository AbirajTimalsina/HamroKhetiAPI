//Requirements
const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');

//Routes
const uploadRouter = require('./Routes/upload')
const ProductList = require('./Routes/productList')
const Category = require('./Routes/category');
const Bugsinfo = require('./Routes/bugsinfo');
const Bugsdetail = require('./Routes/bugsDetail');
const Techinfo = require('./Routes/techinfo');

//Using
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.options('*', cors());
app.use(cors());

app.use('/upload',uploadRouter);
app.use('/productList',ProductList);
app.use('/category',Category);
app.use('/bugsinfo',Bugsinfo);
app.use('/bugsDetail',Bugsdetail);
app.use('/techinfo',Techinfo);


mongoose
	.connect(process.env.URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	})
	.then((db) => {
		console.log('Successfully Connected to mongodb server');
    });
    


app.listen(process.env.PORT,()=>{
    console.log(`Application is running in localhost:${process.env.PORT}`);
});
