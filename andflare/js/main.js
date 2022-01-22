var classes = ["bg1", "bg2", "bg3", "bg4"];
var randomnumber = Math.floor(Math.random() * classes.length);

$(".front-page").addClass(classes[randomnumber]);
