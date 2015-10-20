//Declaring variable in jquery
var $overlay = $ ('<div id="overlay"></div>');
var $image = $ ("<img>");
var $caption = $ ("<p></p>");

//add image to overlay
$overlay.append($image);

//add caption to overlay
$overlay.append($caption);

//add overlay to body
$("body").append($overlay);

$("#Gallery a").click(function(event){
	event.preventDefault();
	var imageLocation = $(this).attr("href");
	//update overlay with the image linked in the link
	$image.attr("src", imageLocation);
	//show overlay
	$overlay.show();
	//Get child alt attribute and set caption
	var captionText = $(this).children("img").attr("alt");
	$caption.text(captionText);
});

//When overlay is clicked
$overlay.click(function(){
	//hide overlay
	$overlay.hide();
});












