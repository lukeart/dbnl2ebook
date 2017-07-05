const request = require('request');
const cheerio = require('cheerio');
var URL = require('url');

function scrapePage(pageurl) {
  request(bookurl,
    function(error,response,html) {
      if (!error && response.statusCode == 200) {
        //console.log(html);
        var $ = cheerio.load(html);
      }
    }
  )
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
  var bookbaseurl = bookurl;
/*
  if (myurl.href.endsWith('index.php')) {
    bookbaseurl = URL.resolve(bookurl,'');
  } else {
    bookbaseurl = bookurl;
  }
*/
  console.log(bookbaseurl);

  request(bookurl,
    function(error,response,html) {
      if (!error && response.statusCode == 200) {
        //console.log(html);
        var $ = cheerio.load(html);
        $('a.head3').each(function(i, element){
          var a = $(this);
          var chaptertitle = a.text();
          var chapterpage = a.attr('href');
          console.log('Chapter: '+chaptertitle+' ('+chapterpage+')');
          var chapterurl = URL.resolve(bookbaseurl,chapterpage);
          console.log(chapterurl);
        });
      }
    }
  )
}


mainloop('http://dbnl.org/tekst/dyks008silv01_01/index.php');
