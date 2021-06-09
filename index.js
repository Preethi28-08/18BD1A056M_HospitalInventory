var express=require('express');
var app=express();

const MongoClient=require('mongodb').MongoClient;
const url='mongodb://127.0.0.1:27017';
const dbName='HospitalInventory';
let db
MongoClient.connect(url, (err,client)=>{
    if(err) return console.log(err);

    db=client.db(dbName);
    console.log(`Connected Database: ${url}`);
    console.log(`Database: ${dbName}`);
});