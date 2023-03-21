// https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php

// 1. Write a JavaScript function to check whether an `input` is an array or not
function isArray(array){

    return Array.isArray(array);

}

// 2. Write a JavaScript function to clone an array
function cloneArray(array){

    var clonedArray = null;

    console.log(clonedArray);
    
    if(Array.isArray(array)) {
        clonedArray = array.slice(0, array.length);                
    }

    return clonedArray;
}

// 3. Write a JavaScript function to get the first element of an array. 
// Passing a parameter 'n' will return the first 'n' elements of the array
function getNFirstArrayElement(array, n){
    var tempArray = null;
    if(Array.isArray(array)){
        if(n != null){
            for(var i = 0; i < n; i++){
                tempArray = array.slice(0, n);
            }
        } else{
            tempArray = array[0];
        }
    }

    return tempArray;
}

// 4. Write a JavaScript function to get the last element of an array. 
// Passing a parameter 'n' will return the last 'n' elements of the array
function getNLastArrayElement(array, n){
    var tempArray = null;

    if(Array.isArray(array)){
        if(n != null){
            for(var i = (n-1); i >= 0; i--){
                tempArray = array.slice(array.length - n , array.length);
            }
        } else{
            tempArray = array[array.length - 1];
        }
    }

    return tempArray;
}

// 5. Write a simple JavaScript program to join all elements of the following array into a string
function joinArrayIntoString(array){
    
    if(Array.isArray(array)){
        return Array(array).join("+");        
    }

    return null;
}

// 6. Write a JavaScript program which accept a number as input and insert 
// dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8
function insertDashesIntoEven(number){    
    
    if(number != null){
        var arrayStringNumbers = String(number).split("");

        for(var i = 0; i < arrayStringNumbers.length - 1; i++){
            if(parseInt(arrayStringNumbers[i]) % 2 == 0 && parseInt(arrayStringNumbers[i+1]) % 2 == 0) {
                arrayStringNumbers[i] += "-";
            }            
        }
        
        arrayStringNumbers = arrayStringNumbers.join("")
        
        return arrayStringNumbers;
    }

    return null;
}
