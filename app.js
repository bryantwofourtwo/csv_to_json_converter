// .csv file coverted to JSON
const http = require("http")
const fs = require("fs")
const path = require("path")
//require the csvtojson converter class 
var Converter = require("csvtojson").Converter;
// create a new converter object
var converter = new Converter({});
// call the fromFile function which takes in the path to your 
// csv file as well as a callback function
converter.fromFile("./customer-data.csv",function(err,result){
    // if an error has occured then handle it
    if(err){
        console.log("An Error Has Occured: " + err);        
    } 
    // create a variable called json and store
    // the result of the conversion
    var json = result;    
    // log our json to verify it has worked
    console.log(json);
    // write json to new file called temp.txt
    fs.writeFile('temp.txt', JSON.stringify(json, undefined, 2), function(err, json){
        if (err) console.log("An Error at WRITE Has Occured: " + err);
        console.log("Successfully Written to File.");
    });
});