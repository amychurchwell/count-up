var countBy = function(countTo, countBy){
  var output = [];
  var total = 0;
  for (var i = 0 ; i < countTo ; i += countBy){
    total += countBy;
    if(total < countTo){
      output.push(total);
    }
  }
  return output;
};

$('document').ready(function(){
  $('#formID').submit(function(event){
    var outputArray = [];
    var countToInput = parseInt($("#countTo").val());
    var countByInput = parseInt($("#countBy").val());
    if (countByInput > countToInput){
      alert("Your number to count by must be smaller than your number to count to.")
    } else if (Number.isInteger(countToInput) && Number.isInteger(countByInput)) {
      outputArray = countBy(countToInput,countByInput);
      alert(outputArray);
    } else {
      alert("Please enter integer!");
    };

    event.preventDefault();
  });
});
