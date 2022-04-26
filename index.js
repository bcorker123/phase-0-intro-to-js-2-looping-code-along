// Code your solutions in this file
let messagesArray = [];
function writeCards(array, event) {
    for (let i = 0; i < array.length; i++) {
        messagesArray[i] = `Thank you, ${array[i]}, for the wonderful ${event} gift!`;
    }
    return messagesArray;
}

function countDown(int){
    let i = 0;
    while (int > -1) {
        console.log(int)
        int--
        i++
    }
}