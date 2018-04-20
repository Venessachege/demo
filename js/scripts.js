$(document).ready(function(){
  //get user input
var input= prompt("Enter the number to be converted");
var inpt= prompt("Enter the number to be converted");

//declare a function that will convert
var roman=function (){
  //declare variables
  var output="";
  var decimals=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
  var numerals=["M",'CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  //loop over the array
    for(i=0;i<=decimals.length;i++){
      while(input%decimals[i]<input){
        output +=numerals[i];
        input-=decimals[i];

      }
    }
      return output;
  }//display the result

  alert(roman(input));

});
