let form_div = document.getElementById('form-div');
let radio_div = document.getElementById('radio-div');
let heading = document.getElementById('heading');
let show_qr = document.getElementById('show-qr');
let last_div = document.getElementById('last-page');
let confiramtion_message = document.getElementById('confiramtion-message');

show_qr.style.display = 'none'
last_div.style.display = 'none'

function transitionToSecPage(){
    form_div.style.display = 'none';
    radio_div.style.display = 'none';
    heading.style.display = 'none';
    show_qr.style.display = 'block';

    var amount = 1;
    var link = "upi://pay?pa=hrishikeshrajbhar118@okicici%26am="+amount+"%26tn=";
    var upi = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + link;
    console.log(upi);
    $(".get_qr").attr("src", upi);
}

function showLastMessage(){
    form_div.style.display = 'none';
    radio_div.style.display = 'none';
    heading.style.display = 'none';
    show_qr.style.display = 'none';
    last_div.style.display = 'block';

    confiramtion_message.textContent=`Hello Mr. ${fullname.value}, Your ticket has been booked successfully. We wish you a Happy Journey!!!`
}