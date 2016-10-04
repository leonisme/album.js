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
        var boxDistance=options.boxDistance;
        var imageBorderWidth=options.imageBorderWidth;
        var imageBorderColor=options.imageBorderColor;
        var boxArray=new Array();
        options=$.extend({
            albumWidth:windowWidth,
            albumHeight:'auto',
            rowLength:6,
            albumBorderWidth:0,
            albumBorderStyle:'solid',
            albumBorderColor:'black',
            albumBorder:'0px solid black',
            boxDistance:14,
            imageBorderWidth:0,
            imageBorderColor:'white'
        },options);

        //album's and box's style
        if(rowLength!=null){
            $(this).css({
                "width":albumWidth
            })
            $('.box',this).css({
                "margin":boxDistance/2
            })
            var boxWidth=$(this).width()/rowLength;
            var boxPadding;
            if(imageBorderWidth!=undefined){
                boxPadding=imageBorderWidth;
            }else{
                boxPadding=0;
            }
            $('.box img',this).css({
                "width":boxWidth-boxDistance-2*boxPadding
            })}else {
            console.error("album:rowLength should not be empty!")
        }
console.log(imageBorderWidth);

        //albumBorder
        if(albumHeight!="auto"){
            $(this).css({
                "border-width":albumBorderWidth,
                "border-style":albumBorderStyle,
                "border-color":albumBorderColor,
                "border":albumBorder
            })}else{
            console.error("album:If albumHeight is auto,border-width,border-style,border-color and border are invalid!")
        }

        //imageBorder
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

        //boxs' position
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
    }
})(jQuery);
