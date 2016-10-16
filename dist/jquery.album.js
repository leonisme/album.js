'use strict';
(function ($) {
    $.fn.album=function (options) {
        //public variable
        var windowWidth=$(window).width();
        var albumWidth=options.albumWidth;
        var albumHeight=options.albumHeight;
        var rowLength=options.rowLength;
        var albumBorderWidth=options.albumBorderWidth;
        var albumBorderStyle=options.albumBorderStyle;
        var albumBorderColor=options.albumBorderColor;
        var albumBorder=options.albumBorder;
        var albumBgColor=options.albumBgColor;
        var imageDistance=options.imageDistance;
        var imageBorderWidth=options.imageBorderWidth;
        var imageBorderColor=options.imageBorderColor;
        var fullScreen=options.fullScreen;
        var boxArray=new Array();
        options=$.extend({
            albumWidth:windowWidth,
            albumHeight:'auto',
            rowLength:6,
            albumBorderWidth:0,
            albumBorderStyle:'solid',
            albumBorderColor:'black',
            albumBorder:'0px solid black',
            albumBgColor:'black',
            imageDistance:14,
            imageBorderWidth:0,
            imageBorderColor:'white',
            fullScreen:'true'
        },options);

        //album's and box's style
        if(rowLength!=undefined&&imageDistance!=undefined){
            $(this).css({
                "width":albumWidth
            })
            $('.box',this).css({
                "margin":imageDistance/2
            })
            var boxWidth=$(this).width()/rowLength;
            var boxPadding;
            if(imageBorderWidth!=undefined){
                boxPadding=imageBorderWidth;
            }else{
                boxPadding=0;
            }
            $('.box img',this).css({
                "width":boxWidth-imageDistance-2*boxPadding
            })}else {
                if(rowLength==undefined){
            console.error("album:rowLength should not be empty!");}
            else if(imageDistance==undefined){
                    console.error("album:imageDistance should not be empty!");
                }
        }

        //albumBorder
        if(albumBorderWidth==undefined){
            albumBorderWidth=0;
        }
        if(albumBorderStyle==undefined){
            albumBorderStyle='solid';
        }
        if(albumBorderColor==undefined){
            albumBorderColor='black';
        }
        if(albumBorder==undefined){
            albumBorder='0 solid black';
        }
        if(albumBgColor==undefined){
            albumBgColor='white';
        }
        if(albumHeight!="auto"){
            $(this).css({
                "border-width":albumBorderWidth,
                "border-style":albumBorderStyle,
                "border-color":albumBorderColor,
                "border":albumBorder,
                "background":albumBgColor
            })}else{
            console.error("album:If albumHeight is auto,border-width,border-style,border-color and border are invalid!")
        }

        //imageBorder
        if(imageBorderWidth==undefined){
            imageBorderWidth=0;
        }
        if(imageBorderColor==undefined){
            imageBorderColor='black';
        }
        if(imageBorderWidth!=undefined){
            $('.box',this).css({
                "padding":imageBorderWidth,
                "background":imageBorderColor
            })}else {
            $('.box',this).css({
                "padding":0,
            })
        }

        //albumHeight
        if(albumHeight!=undefined){
            $(this).css({
                "height":albumHeight
            })
        }else {
            $(this).css({
                "height":'auto'
            })
        }

        //albumScroll
        if(albumHeight!=undefined){
            $(this).css({
                "overflow":"scroll"
            })
        }

        //boxes' position
        $('.box',this).each(function (index,element) {
            var boxHeight=$(element).outerHeight(true);
            if(index<rowLength){
                boxArray[index]=boxHeight;
            }else{
                var minHeight=Math.min.apply(null,boxArray);
                var minHeightIndex=$.inArray(minHeight,boxArray);
                $(element).css({
                    "position":"absolute",
                    "top":minHeight,
                    "left":boxWidth*minHeightIndex
                })
                boxArray[minHeightIndex]+=boxHeight;
            }
        })

        //fullScreen
        function showFullScreen(src){
            //background
            var body=document.body;
            var fullScreen=document.createElement('div');
            fullScreen.className="fullScreen";
            body.appendChild(fullScreen);
            //close
            var close=document.createElement('div');
            close.className="close";
            var line1=document.createElement('div');
            line1.className="line1";
            var line2=document.createElement('div');
            line2.className="line2";
            close.appendChild(line1);
            close.appendChild(line2);
            fullScreen.appendChild(close);
            //img
            var img=document.createElement('img');
            img.src=src;
            fullScreen.appendChild(img);
            //remove
            close.onclick=function(){
                var fullScreen=document.getElementsByClassName('fullScreen')[0];
                body.removeChild(fullScreen);
            }
        }
if(fullScreen!=undefined||fullScreen!='false'||fullScreen=='true'){
    $('.box',this).css('cursor','pointer');
    $('img',this).click(function(event){
        var src=event.target.src;
        showFullScreen(src);
    });}
    }
})(jQuery);
