/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    
    var result = input.match(/[^a-zA-Z]+/g);
    if (result == undefined || result == [] || result == null || result == "") {
      return 1
    }
    if (result[0].includes("/")) { 
        var resSplit = result[0].split('/');
      if (resSplit.length > 2) {
        return "invalid number";
      } else {
        return resSplit[0]/resSplit[1]
      } 
    } else if(result[0].search(/[\d]+/g) == -1) {
        return 'invalid number'
        }
    console.log(result)
    return result;
    
  };
  
  this.getUnit = function(input) {
    var result;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
