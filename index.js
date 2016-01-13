var argv = require('minimist')(process.argv.slice(2));
var stringFromCharCode = String.fromCharCode;

var validDecInput = [32,[48,57],[65,90],[97,122],45];

var isValidInput = function(input){
  var resp = false;
  if (isNaN(input)){
    return resp;
  }
  validDecInput.forEach(function(ele){

    if (Array.isArray(ele)){
      //This validate if the valid decimal value is reverse meaning from 3-1
      //it will swap from: 3-1 to: 1-3
      if (ele[0] > ele[1]){
        var tmp = ele[0];
        ele[0] = ele[1];
        ele[1] = tmp;
      }

      for(var i = ele[0]; i < ele[1]+1; i++){
        if (i === input){
          resp = true;
          break;
        }
      }
    } else {
      if (input === ele){
        resp = true;
      }
    }
  });

  return resp;
};

Object.keys(argv).forEach(function(key){
  var val = argv[key];
  console.log(stringFromCharCode(argv[key]));
  console.log('is: ' + isValidInput(val));
});
