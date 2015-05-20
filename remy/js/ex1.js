

$(document).ready(function(){
    $("td").click(function(){ // au click sur un td présent dans le HTML je lance la fonction suivante
		var randomColor = Math.floor(Math.random()*16777215).toString(16);
        $(this).css({ // je vais modifier le css du td cliqué (this) avec les propriétés suivantes
			backgroundColor: '#' + randomColor});
    });
});





// fonctionne mais en appellant l'id de la case
/* function clickColor1(){
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	$("td").click(function(){
        $("#row1 .t1").css({
			backgroundColor: '#' + randomColor});
    });
};
function clickColor2(){
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	$("td").click(function(){
        $("#row1 .t2").css({
			backgroundColor: '#' + randomColor});
    });
};

function clickColor3(){
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	$("td").click(function(){
        $("#row1 .t3").css({
			backgroundColor: '#' + randomColor});
    });
};

function clickColor4(){
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	$("td").click(function(){
        $("#row2 .t1").css({
			backgroundColor: '#' + randomColor});
    });
};

function clickColor5(){
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	$("td").click(function(){
        $("#row2 .t2").css({
			backgroundColor: '#' + randomColor});
    });
};

function clickColor6(){
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	$("td").click(function(){
        $("#row2 .t3").css({
			backgroundColor: '#' + randomColor});
    });
};

function clickColor7(){
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	$("td").click(function(){
        $("#row3 .t1").css({
			backgroundColor: '#' + randomColor});
    });
};

function clickColor8(){
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	$("td").click(function(){
        $("#row3 .t2").css({
			backgroundColor: '#' + randomColor});
    });
};

function clickColor9(){
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	$("td").click(function(){
        $("#row3 .t3").css({
			backgroundColor: '#' + randomColor});
    });
}; */


// Va modifier l'ensemble des cases
/* function clickColor(){

function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

$(function () {
    $("td").each(function() {
        $(this).css("background-color", get_random_color());
    });
});

}; */


