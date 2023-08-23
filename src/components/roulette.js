export function numberPicker(num) {
    if(num === 0){
        console.log('caralho corajoso');    
    }else if(num % 2 === 0){
        console.log('vermeio');
    }else{
        console.log('pretoh');
    }
}

document.getElementsByClassName('zero').onclick = () => {
    console.log('sucessoh');
}

