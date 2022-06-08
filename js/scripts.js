// const numberArray = [];
//     for (let index = 0; index < stopNum;) {
//       numberArray.push(index += addNumBy);
//     }

$(document).ready(function(){
  $("form#counting").submit(function(event){
    
    const stopNum = parseInt($("#stopNum").val());
    const addNumBy = parseInt($("#addNumBy").val());
    event.preventDefault();
    $(("#output")).text(numberArray);
  });
});

    console.log(numberArray);
