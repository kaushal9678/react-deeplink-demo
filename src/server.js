import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react'
import ReactDOMServer from 'react-dom/server'
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req,res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});