/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  const unitArray = ['gal','l','mi','km','lbs','kg'];
  
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
  
    if (unitArray.indexOf(result) == -1) {
      return 'invalid unit'
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    if (initUnit == 'invalid unit') return 'invalid unit';
    
    var expect = ['l','gal','km','mi','kg','lbs'];
    
    return expect[unitArray.indexOf(initUnit)];
  };

  this.spellOutUnit = function(unit) {
    
    var expect = ['gallons','litres','miles','kilometers','pounds','kilograms'];
    return expect[unitArray.indexOf(unit)];
  };
  
  this.convert = function(initNum, initUnit) {
    if (initNum == 'invalid number' && initUnit == 'invalid unit') return 'invalid number and unit'
    if (initNum == 'invalid number') return 'invalid number'
    if (initUnit == 'invalid unit') return 'invalid unit'
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    var result;
    switch (unitArray.indexOf(initUnit)) {
      case 0:{
        result = initNum * galToL
        break;
      }
      case 1: {
        result = initNum / galToL
        break;
      }
      case 2: {
        result = initNum * miToKm
        break;
      }
      case 3: {
        result = initNum / miToKm
        break;
      }
      case 4: {
        result = initNum * lbsToKg
        break;
      }
      case 5: {
        result = initNum / lbsToKg
        break;
      }
    }
    
    return +(result).toFixed(5);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = initNum + " " + this.spellOutUnit(initUnit) + " converts to " +
                  returnNum + " " + this.spellOutUnit(returnUnit);
    
    return result;
  };
  
}

module.exports = ConvertHandler;
