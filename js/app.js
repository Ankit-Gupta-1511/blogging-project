$(document).ready(
    function ()
              {
                    carouselImages();
                    populateTweets();
              }
);

function carouselImages()
{
    var items = $(".item");
    var image;

    $(".item .content").each(function(index){
                    putImage($(this));
                    });
}

function putImage(item)
{
    var imageUrl = item.attr("data-image");
    item.css({
        "background-image" : 'url('+imageUrl+')',
    });
}


// twitter sharing api


window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));


// populating tweets

function populateTweets()
{
    var currentUrl = $(".twitter-btn").attr("href");
    var heading = $(".blog-heading").text();
    var author = $(".blog-author").text();
    var updatedUrl = currentUrl+"?text="+heading+" - "+author;
    console.log(updatedUrl);
    $(".twitter-btn").attr("href",updatedUrl);
}
