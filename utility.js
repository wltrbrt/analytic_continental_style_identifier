import {anal} from './anal.js';
import {cont} from './cont.js';
var var1 = 0;
var var2 = 0;
const btn1 = document.getElementById('btn1');
const txt1 = document.getElementById('tbuser');
const out1 = document.getElementById('output1');
var analfactor = 0;
var contfactor = 0;
btn1.addEventListener('click',fun1);
function fun1() {
    //btn1.placeholder = "";
    analfactor = 0;
    contfactor = 0;
    document.getElementById("btn1").value="Analyze";
    //document.getElementById("output4").innerHTML = document.getElementById("tbuser").value
    //Insert here
    // the hello world program
        console.log('Hello World');
        var inputtext = txt1.value;
        console.log(inputtext);
    
        //var fs = require('fs');
        //var fs = new global.FileReader();
        //var aarray = fs.readAsText('anal.txt').toString().split(/\t|\r\n/);
        //var carray = fs.readAsText('cont.txt').toString().split(/\t|\r\n/);
        var aarray = anal.split(/\t|\r\n/);
        var carray = cont.split(/\t|\r\n/);
        var iarray = inputtext.split(/\t|\r\n|\s/);
            //var inputtext = fs.readAsText('input.txt').toString();

        let analarray = [];
        let contarray = [];
        let x = 0;
        let y = 0;
        var h = 0;
        //console.log("array");
        //console.log(aarray);
        for(var i = 0; i < aarray.length; i += 2) {
            analarray[i/2] = [];
            analarray[i/2][0] = aarray[i];
            analarray[i/2][1] = aarray[i+1];
        }
        for(var i = 0; i < carray.length; i += 2) {
            contarray[i/2] = [];
            contarray[i/2][0] = carray[i];
            contarray[i/2][1] = carray[i+1];
        }
        //console.log(analarray);
        //console.log(contarray);

        for(var j = 0; j < iarray.length; j += 1) {
            for(var i = 0; i < analarray.length; i += 1) {
                var regex = new RegExp("^"+analarray[i][0]+"$", 'g' );
                var analmatch = iarray[j].match(regex);
                if (analmatch !== null){
                    var analmatchlength = analmatch.length;
                    //console.log(analmatch);
                    analfactor = analfactor + analarray[i][1]*analmatchlength;
                }
            }
        }
        analfactor = analfactor/iarray.length*100;
        console.log(analfactor);
        for(var j = 0; j < iarray.length; j += 1) {
            for(var i = 0; i < contarray.length; i += 1) {
                var regex = new RegExp("^"+contarray[i][0]+"$", 'g' );
                var contmatch = iarray[j].match(regex);        
                if (contmatch !== null){
                    var contmatchlength = contmatch.length;
                    //console.log(contmatch);
                    contfactor = contfactor + contarray[i][1]*contmatchlength;
                }
            }
        }
        contfactor = contfactor/iarray.length*100;
        console.log(iarray);
        console.log(contfactor);
    //Insert above
    
    document.getElementById("output1").innerHTML = `This article is ${analfactor}% Analytic.`;
    document.getElementById("output2").innerHTML = `This article is ${contfactor}% Continental.`;
    
    
    
    //document.getElementById("output3").innerHTML = analarray[0][0];
    //document.getElementById("output4").innerHTML = contarray[0][0];
    //console.log(analtextByLine[0]);
    //console.log(conttextByLine[0]);
} 