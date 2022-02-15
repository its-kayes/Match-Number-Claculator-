function getpin(){
    let pin = Math.round(Math.random() * 10000 );
    let pinString = pin + '';
    if(pinString.length == 4) {
        return pin;
    }
    else{
        // console.log('3 number pin', pin)
        return getpin();
    }

}
function generatePin(){
    let pin = getpin();
    document.getElementById('pin-inp').value = pin;
    // console.log(pin)
}


document.getElementById('numbers').addEventListener('click', function(event){
    let click = event.target.innerText;
    let number = document.getElementById('number-inp');
    if(isNaN(click)){
        if(click == 'C'){
            number.value = '';
        }
        // console.log(click);
    }
    else{
        let preNumber = number.value;
        let newNumber = preNumber + click;
        number.value = newNumber;    
    }
    
    // console.log('just click',  );
})


function verifyPin(){

    let pin = document.getElementById('pin-inp').value;
    let numbers = document.getElementById('number-inp').value;

    let success = document.getElementById('noti-success');
    let error = document.getElementById('noti-fail');

    if(pin == numbers){
        success.style.display = 'block';
        error.style.display = 'none';

    }
    else{
        error.style.display = 'block';
        success.style.display = 'none';

    }
    // console.log('going to verifyPin');
}