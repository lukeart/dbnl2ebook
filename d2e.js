//var he = require('he');
var Xray = require('x-ray');
var URL = require('url');

var x = Xray();

function scrapePage(url) {
}

function mainloop(bookurl) {
  var myurl = URL.parse(bookurl);

/*
  console.log(myurl.host);
  console.log(myurl.pathname);
*/

  if (myurl.host!=='dbnl.org' || !myurl.href.endsWith('index.php')) {
    console.log("Incorrect parameters");
    exit(1);
  }

  x(bookurl,'article',[{
    text: '#tekst_en_noten@html'
  }])(function(err,obj) {
    console.log(obj[0].text);
  })
}


mainloop('http://dbnl.org/tekst/dyks008silv01_01/index.php');
