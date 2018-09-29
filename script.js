var a = 5;
var b = 10;
var myName ="Lee";


function addNums(numA, numB){ 
    return numA+numB;
}


function subtract (a,b){ 
    return a-b;
}

function checkNums(num1,num2){ 
    if (num2>num1){ 
        return "True";
    }
    else if(num2===num1){ 
        return "Values are the same";
    }
    else { 
        return "false";
    }


}


function listWords(w1,w2,w3,w4){ 
var words =[w1,w2,w3,w4];
 return words;
}


function convert (mins){ 

    var hours = mins/60;
     hours = Math.round(hours);
     mins=mins%60;

    return hours + ":" + mins;
}

function calc (radius){ 

    area= Math.PI *(radius**2);
    perimeter = 2*Math.PI*radius;

    

    return "Area  :  "+ Math.round(area) +"    Perimeter   :"+ Math.round(perimeter);
}

function calcMiles(distance,unit){ 
  
    if(unit==="miles"){ 
        distance=distance*1.60934;
        return "Converted to KM" + distance;
    }
    else if (unit==="kilometres"){ 
        distance=distance*0.9999975145;
        return "Converted to Miles" + distance;
    }
    return "Error";
    
}

function calcBmi(weight,height){ 

    bmi=weight/Math.pow(height,2);
    return bmi;
}

function find(year,month,day){ 
    var d = new Date(day,month,year);
    return d.getDay();
}

function palindromes(s){
  var  s= toString();
    if(s == s.split('').reverse().join('')){ 
        return true ;
    }
     else { 

        return false;
     }
}


function calculator(value1,value2, operator){
    var op = ["+","-", "*", "/" ];

    for (i = 0; i < op.length; i++) {
       
       if(operator == op[i]){
           return eval(value1 +op[i] + value2);
       }
   }
   if(operator != op){
       return "Invalid operand. Please use one of the following operands: " 
       + op.toString();
   }
}