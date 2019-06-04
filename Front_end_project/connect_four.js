
var player1 = prompt("Player One: Enter Your Name , you will be Blue");
var player1Color = 'rgb(86, 151, 255)';

var player2 = prompt("Player Two: Enter Your Name, you will be Red");
var player2Color = 'rgb(237, 45, 73)';

var game_on = True;
var table = $('table tr');

function reportWin(rowNum, colNum){
  console.log("You won at this point" );
  console.log(rowNum);
  console.log(colNum);
}

function changeColor(rowIndex, colIndex, color){
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background_color', color);
}

function returnColor(rowIndex, colIndex){
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background_color', color);
}


function checkButton(colIndex){
   var color = returnColor(5, colIndex);

   for(var row = 5; row>-1;row--){
     color = returnColor(row, colIndex);
     if(color === "rgb(128, 128, 128)"){
       return row;
     }
   }
}

function colorMatchCheck(one, two, three, four){
  return (one === two && one === three && one === four && one !== "rgb(128, 128, 128)" && one !== undefined )
}

function checkHorizontalWin(){
  for(var row = 0; row<7; row++){
    for(var col = 0; col<4; col++ ){
      if(colorMatchCheck(returnColor(row, col), returnColor(row, col+1), returnColor(row, col+2), returnColor(row, col+3))){
        console.log("horizon");
        reportWin(row, col);
        return true;
      }
      else{
        continue;
      }
    }
  }
}


function checkVerticalWin(){
  for(var col = 0; col<7; col++){
    for(var row = 0; row<4; row++ ){
      if(colorMatchCheck(returnColor(row, col), returnColor(row+1, col), returnColor(row+2, col), returnColor(row+3, col))){
        console.log("vertical");
        reportWin(row, col);
        return true;
      }
      else{
        continue;
      }
    }
  }
}

function checkDiagnolWin(){
  for(var col = 0; col<7; col++){
    for(var row = 0; row<7; row++ ){
      if(colorMatchCheck(returnColor(row, col), returnColor(row+1, col+1), returnColor(row+2, col+2), returnColor(row+3, col+3))){
        console.log("diagnol");
        reportWin(row, col);
        return true;
      }
      else if(colorMatchCheck(returnColor(row, col), returnColor(row-1, col+1), returnColor(row-2, col+2), returnColor(row-3, col+3))){
        console.log("diagnol");
        reportWin(row, col);
        return true;
      }
      else{
        continue;
      }
    }
  }
}
