const button = document.querySelector("#click-button");
const number = document.querySelector("#number");
const message = document.querySelector("#message");
let counter = number.innerText;

console.log(counter);

function addOneToNumber(){
    counter = parseInt(counter,10);
    counter = counter + 1;
    number.innerText = counter;

    updateMessage();
}

function updateMessage(){

    if (counter >= 10){
        message.innerText = "Way to go!";
    }

    if (counter >= 20){
        message.innerText = "Keep going!";
    }

    if (counter >= 30){
        message.innerText = "Great!";
    }

    if (counter >= 60){
        message.innerText = "Amazing!";
    }

    if (counter >= 100){
        message.innerText = "Awesome!";
    }
    
};

button.addEventListener("click", addOneToNumber);
