

var cells=document.getElementsByTagName('td');
var gameOver = false;
var newgame=document.getElementById('newgame');
var easymode=false;

for(var i=0;i<cells.length;i++){
	var r=Math.floor((Math.random()*256)+1);
	var g=Math.floor((Math.random()*256)+1);
	var b=Math.floor((Math.random()*256)+1);
	cells[i].style.background='rgb('+r+','+g+','+b+')';
	var titlecolor=cells[Math.floor(Math.random()*7+1)].style.background;
}



document.getElementsByTagName('h1')[0].innerHTML=titlecolor.toUpperCase();
var regexR = /\((.*?)\,/;
var regexG = /\,(.*?)\,/;
var regexB = /\,(.*?)\)/;
r1 = regexR.exec(titlecolor)[1];
g1 = regexG.exec(titlecolor)[1];
b1 = regexB.exec(titlecolor)[1];
b2=b1.replace(g1,'');
b3=b2.slice(2,b2.length);
document.getElementsByTagName('h1')[1].innerHTML=(rgbToHex(Number(r1), Number(g1),Number(b3))).toUpperCase() ;

for(var i=0;i<cells.length;i++){
	if(gameOver===false){
		cells[i].addEventListener('click',function(){
		if(this.style.background==titlecolor){
			document.getElementById('score').innerHTML="You found it";
			gameOver=true;
			if(easymode==false){
				
				for(var i=0;i<cells.length;i++){
					cells[i].style.background=titlecolor;
					}
			}
			else{
				for(var i=0;i<3;i++){
					cells[i].style.background=titlecolor;
					}
				/*for(var i=3;i<cells.length;i++){
					cells[i].style.background=black;
					}*/
			}
			document.getElementById('menu').style.background=titlecolor;
			
		}
		else{
			this.style.background='black';
		}
	});
	
}
}


newgame.addEventListener('click',function(){
	
	if(easymode==false){
				
				for(var i=0;i<cells.length;i++){
					var r=Math.floor((Math.random()*256)+1);
					var g=Math.floor((Math.random()*256)+1);
					var b=Math.floor((Math.random()*256)+1);
					cells[i].style.background='rgb('+r+','+g+','+b+')';
					titlecolor=cells[Math.floor(Math.random()*7+1)].style.background;
				}
			}
			else{
				for(var i=0;i<3;i++){
					var r=Math.floor((Math.random()*256)+1);
					var g=Math.floor((Math.random()*256)+1);
					var b=Math.floor((Math.random()*256)+1);
					cells[i].style.background='rgb('+r+','+g+','+b+')';
					titlecolor=cells[Math.floor(Math.random()*2+1)].style.background;
				}
			}
	document.getElementById('score').innerHTML="Which one ?";
	gameOver=false;
	document.getElementsByTagName('h1')[0].innerHTML=titlecolor.toUpperCase();
	r1 = regexR.exec(titlecolor)[1];
g1 = regexG.exec(titlecolor)[1];
b1 = regexB.exec(titlecolor)[1];
b2=b1.replace(g1,'');
b3=b2.slice(2,b2.length);
document.getElementsByTagName('h1')[1].innerHTML=(rgbToHex(Number(r1), Number(g1),Number(b3))).toUpperCase() ;
	
});

document.getElementById('modeeasy').addEventListener('click',function(){
	for(var i=3;i<cells.length;i++){
		cells[i].style.background="black";
		easymode=true;
	}
	for(var i=0;i<3;i++){
		var r=Math.floor((Math.random()*256)+1);
		var g=Math.floor((Math.random()*256)+1);
		var b=Math.floor((Math.random()*256)+1);
		cells[i].style.background='rgb('+r+','+g+','+b+')';
		titlecolor=cells[Math.floor(Math.random()*2+1)].style.background;
	}
	document.getElementById('score').innerHTML="Which one ?";
	gameOver=false;
	document.getElementsByTagName('h1')[0].innerHTML=titlecolor.toUpperCase();
	r1 = regexR.exec(titlecolor)[1];
g1 = regexG.exec(titlecolor)[1];
b1 = regexB.exec(titlecolor)[1];
b2=b1.replace(g1,'');
b3=b2.slice(2,b2.length);
document.getElementsByTagName('h1')[1].innerHTML=(rgbToHex(Number(r1), Number(g1),Number(b3))).toUpperCase() ;
	
});

document.getElementById('modehard').addEventListener('click',function(){

	easymode=false;
	for(var i=0;i<cells.length;i++){
				var r=Math.floor((Math.random()*256)+1);
				var g=Math.floor((Math.random()*256)+1);
				var b=Math.floor((Math.random()*256)+1);
					cells[i].style.background='rgb('+r+','+g+','+b+')';
					titlecolor=cells[Math.floor(Math.random()*7+1)].style.background;
				}
	document.getElementById('score').innerHTML="Which one ?";
	gameOver=false;
	document.getElementsByTagName('h1')[0].innerHTML=titlecolor.toUpperCase();
	r1 = regexR.exec(titlecolor)[1];
g1 = regexG.exec(titlecolor)[1];
b1 = regexB.exec(titlecolor)[1];
b2=b1.replace(g1,'');
b3=b2.slice(2,b2.length);
document.getElementsByTagName('h1')[1].innerHTML=(rgbToHex(Number(r1), Number(g1),Number(b3))).toUpperCase() ;
	
});

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

