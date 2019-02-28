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
    return result 
  };
  
  this.getUnit = function(input) {
    var result = input.match(/[a-zA-Z]+/g);
    if (result == undefined || result == [] || result == null || result == "") {
      return 'invalid unit'
    }
    result = result[0].toLowerCase();
    var unitArray =['gal','l','mi','km','lbs','kg'];
    if (unitArray.indexOf(result) == -1) {
      return 'invalid unit'
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    if (initUnit == 'invalid unit') return 'invalid unit';
    var input = ['gal','l','mi','km','lbs','kg'];
    var expect = ['l','gal','km','mi','kg','lbs'];
    
    return expect[input.indexOf(initUnit)];
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
