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


// 8. Write a JavaScript program to find the most frequent item of an array
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];// Sample Output : a ( 5 times )

function findMostFrequent(array){
    
    var mostfrequencyItem;
    var frequency = 0;
    var mostfrequency = 0;

    for(var i = 0; i < array.length; i++){        

        for(var j = i; j < array.length; j++){
            if(array[i] == array[j]){
                frequency++;
            }
        }

        if(frequency > mostfrequency){
            mostfrequencyItem = array[i];
            mostfrequency = frequency;
        }

        frequency = 0;    
    }

    return mostfrequencyItem;
}

// 9. Write a JavaScript program which accept a string as input and swap the case of 
// each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX
function swapCase(string){

    var arrayString = String(string).split("");

    for(var i = 0; i < arrayString.length; i++){       

        if(arrayString[i].toLowerCase() == arrayString[i]){
            arrayString[i] = arrayString[i].toUpperCase();
        }
        else{
            arrayString[i] = arrayString[i].toLocaleLowerCase()
        }
    }
    
    return(arrayString.join(""));

}

// 12. Escreva um programa JavaScript para calcular a soma e o produto de um array de inteiros
function arraySomaEMultiplicacao(array){
    var soma = 0;
    var multiplicacao = 1;

    for(var i = 0; i < array.length; i++){
        soma += array[i];
        multiplicacao *= array[i];
    }

    return "Soma = " + soma + " e multiplicacao = " + multiplicacao;
}

// 13. Escreva um programa JavaScript para adicionar itens em um array em branco e exibir os itens

// <form>
//  <input type="text" id="element_id" name="element">
//  <input type="button" name="btnAdd" value="add" onclick="doAdd();">
//  <input type="button" name="btnDisplay" value="display" onclick="doDisplay();">
// </form>
// <p id="display_area"></p>

var x = 0;
var addedElements = new Array();

function doAdd(){
    addedElements[x] = document.getElementById("element_id").value;
    x++;
    document.getElementById("element_id").value = "";
}

function doDisplay(){

    var result = "";

    for(var i = 0; i < x; i++) {
        result += addedElements[i] + "<br />";
    }
    
    document.getElementById("display_area").innerHTML = result;

}
