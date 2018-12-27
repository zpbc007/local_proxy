var express = require('express');
var proxy = require('http-proxy-middleware');
var compression = require('compression');
 
var app = express();

app.use(compression());
 
app.use('/api', proxy({
	target: 'http://api.zpblog.xyz/mock/21',
	changeOrigin: true,
	pathRewrite: {
		'^/api': ''
	}}));
app.listen(3000);

