

// 1. Write a JavaScript function to check whether an `input` is an array or not
const isArray = (array) => {

    return Array.isArray(array);

}

// 2. Write a JavaScript function to clone an array
const cloneArray = (array) => {
    
    if(Array.isArray(array)){
        return array.slice(0, array.length);
    }

    return null;
}

// 3. Write a JavaScript function to get the first element of an array. 
// Passing a parameter 'n' will return the first 'n' elements of the array
const getArrayElementsFromBeginning = (array, n) => {
    
    if(Array.isArray(array)){
        if(n != null){
            return array.slice(0, n);
        }else{
            return array[0];
        }        
    }

    return null;    
}

// 4. Write a JavaScript function to get the last element of an array. 
// Passing a parameter 'n' will return the last 'n' elements of the array
const getArrayElementsFromEnd = (array, n) => {
    if(Array.isArray(array)){
        if(n != null){
            return array.slice(array.length - n , array.length);
        } else{
            return array[array.length - 1];
        }
    }
    return null;
}

// 5. Write a simple JavaScript program to join all elements of the following array into a string
const getArrayToString = () => {
    
    if(Array.isArray(array)){
        return array.join("+");        
    }

    return null;
}
