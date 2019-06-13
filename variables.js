// you solution should be here
// var today = new Date();
// var dd = today.getDate();
// var mm = today.getMonth()+1; //January is 0!
// var yyyy = today.getFullYear();
// if(dd<10) {
// dd='0'+dd
// }
// if(mm<10) {
// mm='0'+mm
// }
// today = yyyy+'/'+mm+'/'+dd;

function getPossibleAge(){
  var myAge = document.getElementById("dateOfbirth").value;
  var futureYear = document.getElementById("futureDate").value;
  var PossibleAge1 = 0;
  var PossibleAge2 = 7; //  7 years older than the first possible age


  var PossibleAge1 = (myAge - futureYear) * -1 ;
  var PossibleAge2 = PossibleAge2 + PossibleAge1
  document.getElementById("result").innerHTML = PossibleAge1;
  document.getElementById("result2").innerHTML = PossibleAge2;
}


function getLifeAmount(){
  var currAge = document.getElementById("currAge").value;
  var futureAge = document.getElementById("futureAge").value;
  var amount = document.getElementById("amount").value;


  var lifeCount = ( futureAge - currAge);
  var amountForLife = lifeCount * amount;

  document.getElementById("nn").innerHTML = amountForLife;
  document.getElementById("x").innerHTML = futureAge; //OF AGE OF
}
