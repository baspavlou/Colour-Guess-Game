

var cells=document.getElementsByTagName('td');
var gameOver = false;
var newgame=document.getElementById('newgame');
var easymode=false;

for(var i=0;i<cells.length;i++){
	cells[i].style.background='rgb('+Math.floor((Math.random()*256)+1)+','+Math.floor((Math.random()*256)+1)+','+Math.floor((Math.random()*256)+1)+')';
	var titlecolor=cells[Math.floor(Math.random()*7+1)].style.background;
}


document.getElementsByTagName('h1')[0].innerHTML=titlecolor;

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
					cells[i].style.background='rgb('+Math.floor((Math.random()*256)+1)+','+Math.floor((Math.random()*256)+1)+','+Math.floor((Math.random()*256)+1)+')';
					titlecolor=cells[Math.floor(Math.random()*7+1)].style.background;
				}
			}
			else{
				for(var i=0;i<3;i++){
					cells[i].style.background='rgb('+Math.floor((Math.random()*256)+1)+','+Math.floor((Math.random()*256)+1)+','+Math.floor((Math.random()*256)+1)+')';
					titlecolor=cells[Math.floor(Math.random()*2+1)].style.background;
				}
			}
	document.getElementById('score').innerHTML="Which one ?";
	gameOver=false;
	document.getElementsByTagName('h1')[0].innerHTML=titlecolor;
});

document.getElementById('modeeasy').addEventListener('click',function(){
	for(var i=3;i<cells.length;i++){
		cells[i].style.background="black";
		easymode=true;
	}
	for(var i=0;i<3;i++){
		cells[i].style.background='rgb('+Math.floor((Math.random()*256)+1)+','+Math.floor((Math.random()*256)+1)+','+Math.floor((Math.random()*256)+1)+')';
		titlecolor=cells[Math.floor(Math.random()*2+1)].style.background;
	}
	document.getElementById('score').innerHTML="Which one ?";
	gameOver=false;
	document.getElementsByTagName('h1')[0].innerHTML=titlecolor;
});

document.getElementById('modehard').addEventListener('click',function(){

	easymode=false;
	for(var i=0;i<cells.length;i++){
					cells[i].style.background='rgb('+Math.floor((Math.random()*256)+1)+','+Math.floor((Math.random()*256)+1)+','+Math.floor((Math.random()*256)+1)+')';
					titlecolor=cells[Math.floor(Math.random()*7+1)].style.background;
				}
	document.getElementById('score').innerHTML="Which one ?";
	gameOver=false;
	document.getElementsByTagName('h1')[0].innerHTML=titlecolor;
});