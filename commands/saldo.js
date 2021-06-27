const express = require('express');
const router = express.Router();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('banco.json')
const db = low(adapter)

const execute = (bot, msg, args) => {
  

    let json = db.get(args[0]).find({id: 1}).value()
    let stringVar = JSON.stringify(json)

    var str = stringVar;

    var split = str.split(",");
    console.log(split[1])  
    var split2 = split[1].split("}");
    console.log(split2[0])  
    var replace = split2[0].replace(/"/gi, "");
    var split3 = replace.split(":")
    console.log(split3[1])  

  
    return msg.reply("O saldo atual do gb "+args[0]+" é de "+split3[1]+" gema(s)");
  };
  
  module.exports = {
    name: "saldo",
    help: "Confere saldo",
    execute,
  };