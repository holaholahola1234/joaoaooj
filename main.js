var canvas=new fabric.Canvas("myCanvas")
player_x=10

player_y=10
bloque_ancho=30;
bloque_alto=25;

var playerObject=""
var blockObject="p"

function player_update(){
fabric.Image.fromURL("player.png", function(Img){
    playerObject=Img;
    playerObject.scaleToWidth(150);
    playerObject.scaleToHeight(140);
    playerObject.set({
        top: player_y,
        left: player_x
   })
    canvas.add(playerObject)
});
}

function new_image(get_image){
    fabric.Image.fromURL (get_image , function(Img){
        blockObject=Img;
        blockObject.scaleToWidth(bloque_ancho);
        blockObject.scaleToHeight(bloque_alto);
        blockObject.set({
            top: player_y,
            left: player_x
       })
        canvas.add(blockObject)
    });
    }

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed)
if(e.shiftKey && keyPressed == '80')
{
console.log("se presiona p y shift al mismo tiempo");
bloque_ancho = bloque_ancho + 10;
bloque_alto = bloque_alto + 10;
document.getElementById("currentWidth")
        .innerHTML = bloque_ancho;
document.getElementById("currentHeight")
        .innerHTML = bloque_alto;
}

if(e.shiftKey && keyPressed == '77')
{
console.log("se presiona m y shift al mismo tiempo");
bloque_ancho = bloque_ancho - 10;
bloque_alto = bloque_alto - 10;
document.getElementById("currentWidth")
        .innerHTML = bloque_ancho;
document.getElementById("currentHeight")
        .innerHTML = bloque_alto;
}

if(keyPressed == '38')
{
  up();
  console.log("up");
}
if(keyPressed == '40')
{
  down();
  console.log("down");
}
if(keyPressed == '37')
{
  left();
  console.log("left");
}
if(keyPressed == '39')
{
  right();
  console.log("right");
}

if(keyPressed == '87')
{
  new_image('wall.jpg'); 
  console.log("w");
}


if(keyPressed == '71')
{
  new_image('ground.png'); 
  console.log("g");
}

if(keyPressed == '76')
{
  new_image('light_green.png'); 
  console.log("l");
}

if(keyPressed == '84')
{
  new_image('trunk.jpg'); 
  console.log("t");
}

if(keyPressed == '82')
{
  new_image('roof.jpg'); 
  console.log("r");
}

if(keyPressed == '89')
{
  new_image('yellow_wall.png'); 
  console.log("y");
}

if(keyPressed == '68')
{
  new_image('dark_green.png'); 
  console.log("d");
}

if(keyPressed == '85')
{
  new_image('unique.png'); 
  console.log("u");
}

if(keyPressed == '67')
{
  new_image('cloud.jpg'); 
  console.log("c");
}

}
function down(){
    if(player_y<=500){
     player_y=player_y+bloque_alto;
     canvas.remove(playerObject);
     player_update()
    }

}
function up(){
    if(player_y>=0){
     player_y=player_y-bloque_alto;
     canvas.remove(playerObject);
     player_update()
    }

}
function right(){
    if(player_x<=850){
     player_x=player_x+bloque_ancho;
     canvas.remove(playerObject);
     player_update()
    }

}
function left(){
    if(player_x>=0){
     player_x=player_x-bloque_ancho;
     canvas.remove(playerObject);
     player_update()
    }

}




