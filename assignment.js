/* Question no 3 brickCalculator solution*/
function brickCalculator(height){
    if(height<0){
    var neededBrick = "no bricks needed as height can't be negative"
    }
    else if(1<=height && height<=10){
        var neededBrick = 15*1000*h;
    }else if(11<=height && height<=20){
         neededBrick = 15*1000*10  + 12*1000*(height-10);
    }else{
         neededBrick = 15*1000*10  + 12*1000*10 + 10*1000*(height-20);
    }
    return neededBrick;
}

console.log(brickCalculator(22));

/* Question no 2 woodCalculator solution*/
function woodCalculator(chair, table, bed){
    var woodNeeded;
    var chairWood = chair*1;
    var tableWood = table*3;
    var bedWood = bed*5; 
    woodNeeded = chairWood + tableWood + bedWood;
    return woodNeeded;
}
console.log(woodCalculator(1,1,1));

/* Question no 1 feetToMile solution*/
function feetToMile(feet){
var mile = feet/5280;

if(feet< 0){
    return "distance cannot be nagative"
} else if(feet>=5280){
    return parseFloat (mile.toFixed(2));
}else{
    return parseFloat(mile.toFixed(4));
}
}




console.log(feetToMile(100));



/* Question no 4 tinyFriend solution*/
function tinyFriend(array) {
  var tiny = array[0];
  
      for (i = 0; i < array.length; i++) {
     
    if (array[i].length < tiny.length) {
        tiny = array[i];
              } 

      
      }
    
  
  return tiny;
}

var smallestString = tinyFriend(["akash","nilu","korno","eva","mun"]);





console.log(smallestString);