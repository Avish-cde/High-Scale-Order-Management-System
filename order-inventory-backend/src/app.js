// src/app.js
// const express = require('express');
import express from 'express';
// const cors = require('cors');
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

export default app;

