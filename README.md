# album.js

A simple and easy to use plugin to create an album with pictures on web page. The pictures in the album are placed like waterfall. You can set album’s style, images’ style and some other settings.

## Usage
### You will need to include:
- jQuery library
- The JavaScript file jquery.album.js 
- The css file jquery.album.css

Including files:
```html
<link rel="stylesheet" type="text/css" href="jquery.album.css" />
<script src="jquery.min.js"></script>
<script type="text/javascript" src="jquery.album.js"></script>
```
### Required HTML structure
If you need more than one album in a web page, please give different album different ids.
```html
<div id="album">
    <div class="box">
        <img src="/*a image’s URL*/">
    </div>
    <div class="box">
        <img src="/*a image’s URL*/">
    </div>
    <div class="box">
        <img src="/*a image’s URL*/">
    </div>
</div>
```
###Initialization
All you need to do is call the plugin inside a function:
```html
$(window).on('load',function () {
    $('#album').album();
})
```
A initialization with all options:
```html
$(window).on('load',function () {
    $('#album').album({
        albumWidth:1000,
        albumHeight:500,
        albumBorderWidth:1,
        albumBorderStyle:'solid',
        albumBorderColor:'black',
        albumBgColor:’white’,
        rowLength:6,
        boxDistance:14,
        imageBorderWidth: 0,
        imageBorderColor:'white'
    })
})
```
## Options
- `albumWidth`: Defines the CSS width property for the album. If you don’t set it,it will be window’s width.
- `albumHeight`:(Default `auto`) Defines the CSS height property for the album.
- `albumBorderWidth`:(Default `0`) Defines the CSS border-width property for the album.
- `albumBorderStyle`:(Default `solid`) Defines the CSS border-style property for the album.
- `albumBorderColor`:(Default `black`) Defines the CSS border-color property for the album.
- `albumBorder`:(Default `0 solid black`) Defines the CSS border property for the album.
- `albumBgColor`:(Default `black`) Determines the color of album’s background.
- `rowLength`:(Default `6`) Determines how many pictures can be placed in the first row.
- `boxDistance`:(Default `14`) Determines the distance between two pictures.
- `imageBorderWidth`:(Default `0`) Determines width of the photo frames.
- `imageBorderColor`:(Default `white`) Determines color of the photo frames.





