// selete all propertys
const qrinput = document.getElementById('qr-input');
const qrimg = document.getElementById('qr-img');
const qrbutton = document.getElementById('qr-button');
// check 
console.log(qrinput,qrimg ,qrbutton)

// addEventListener on button
qrbutton.addEventListener('click', () =>{
    // check input value seleted propertys
    const inputValue = qrinput.value;
    console.log(inputValue);

    if( !inputValue ){
        alert("please enter a valid URL");
        return;
    }else{
        qrimg.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        arimg.alt =  `QR Code For ${inputValue}`;
    }
});