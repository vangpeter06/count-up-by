function result(stopNum, addNumBy) {
  let numberArray = [];
    for (let index = 0; index < stopNum;) {
      numberArray.push(index += addNumBy);
     
    }
    return numberArray;
    // console.log(numberArray); 
  }

  $(document).ready(function(){
  $("form#counting").submit(function(event) {
    event.preventDefault();
    const stopNum = parseInt($("#stopNum").val());
    const addNumBy = parseInt($("#addNumBy").val());
    const results = result(stopNum, addNumBy);
    $("#output").text(results);
    
  });
});
