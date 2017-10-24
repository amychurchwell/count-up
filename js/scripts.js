var countBy = function(countTo, countBy){
  var output = [];
  var total = 0;
  for (var i = 0 ; i < countTo ; i += countBy){
    total += countBy;
    output.push(total);
  }
  return output;
};

$('document').ready(function(){
  $('#formID').submit(function(event){
    var outputArray = [];
    var countToInput = parseInt($("#countTo").val());
    var countByInput = parseInt($("#countBy").val());
    outputArray = countBy(countToInput,countByInput);

    alert(outputArray);


    event.preventDefault();
  });
});
