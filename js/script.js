function getPin(){
    const pin = Math.round(Math.random()*10000);
    const getPin = pin + '';
    if(getPin.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
};
function generatePin(){
    
    const pin = getPin();
    console.log(pin)
    document.getElementById('display-pin').value = pin;
    
};

document.getElementById('keypad').addEventListener('click', function(event){
    const number = event.target.innerText;
    if(isNaN(number)){
        if(number == 'C'){
            const calcInput = document.getElementById('typed-number');
            calcInput.value = '';
        }
    }
    else{
        const calcInput = document.getElementById('typed-number');
        const previousCalc = calcInput.value;
        const newCalc = previousCalc + number;
        calcInput.value = newCalc;
    }
    
});

document.getElementById('correct').style.display = 'none';
document.getElementById('wrong').style.display = 'none';
document.getElementById('submit-button').addEventListener('click', function(){
    const generatePin = document.getElementById('display-pin').value;
    const inputPin = document.getElementById('typed-number').value;
    const message1 = document.getElementById('correct');
    const message2 = document.getElementById('wrong');
    if(generatePin == inputPin){
        message1.style.display = 'block';
        message2.style.display = 'none';
    }
    else{
        message2.style.display = 'block';
        message1.style.display = 'none';
    }
});
