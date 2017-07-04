const request = require('request');
const cheerio = require('cheerio');
var URL = require('url');

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

  request(bookurl,
    function(error,response,html) {
      if (!error && response.statusCode == 200) {
        console.log(html);
        var $ = cheerio.load(html);
      }
    }
  )
}


mainloop('http://dbnl.org/tekst/dyks008silv01_01/index.php');
