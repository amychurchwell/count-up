var countBy = function(countTo, countBy){
  var output = [];
  var total = 0;
  for (var i = 0 ; i < countTo ; i += countBy){
    total += countBy;
    output.push(total);
  }
  return output;
}


$('document').ready(function(){

  
  event.preventDefault();
});
