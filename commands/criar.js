const express = require('express');
const router = express.Router();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('banco.json')
const db = low(adapter)

const execute = (bot, msg, args) => {

    db.set(args[0], []).write();

    db.get(args[0]).push({
        id: 1,
        gemas: 1
    }).write()
    
  return msg.reply("gb criado "+args[0]);
  };
  
  module.exports = {
    name: "criar",
    help: "Hello, world!",
    execute,
  };