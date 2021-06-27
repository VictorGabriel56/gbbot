const express = require('express');
const router = express.Router();

const execute = (bot, msg, args) => {

  console.log(args[0]);
  return msg.reply("Hello");
  };
  
  module.exports = {
    name: "update",
    help: "Hello, world!",
    execute,
  };