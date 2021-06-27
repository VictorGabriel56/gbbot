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
    var split2 = split[1].split("}");
    var replace = split2[0].replace(/"/gi, "");
    var split3 = replace.split(":")
    var c = parseInt(split3[1])
    var d = parseInt(args[1])

    console.log(args[1])

    db.get(args[0]).find({id: 1}).assign({gemas: d + c}).write()
    
  
    return msg.reply("Foram adicionados "+args[1]+" ao saldo do guild bank da guild: "+args[0]);
  };
  
  module.exports = {
    name: "add",
    help: "add saldo",
    execute,
  };