$(document).ready(
    function ()
{        carouselImages();}
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