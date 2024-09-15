let train_div = document.getElementById('train-div');
let flight_div = document.getElementById('flight-result');
let bus_div = document.getElementById('bus-result');
let hotel_div = document.getElementById('hotel-result');


let train_details_div = document.getElementById('train-details');
let pnr_div = document.getElementById('pnr-div');
let train_status = document.getElementById('live-train-status');

let radio_values = document.querySelectorAll("input[name='type']");

let findSelected = (answer) => {
    let selected = document.querySelector("input[name='type']:checked").value;
    console.log(selected);
    answer = selected;
    return answer;
}

let radio_ans;
let answer = findSelected(radio_ans);
console.log(`value is ${answer}`);

let radio_val;
radio_values.forEach(radio_val =>{
    radio_val.addEventListener("change",findSelected )
}
)

train_div.style.display = 'block';
flight_div.style.display = 'none';
bus_div.style.display = 'none';
hotel_div.style.display = 'none';

pnr_div.style.display = 'none';
train_status.style.display = 'none';

function train(){
    document.getElementById('train').style.color='blue';
    document.getElementById('train-icon').style.color='blue';
    document.getElementById('aeroplane').style.color='white';
    document.getElementById('aeroplane-icon').style.color='white';
    document.getElementById('bus').style.color='white';
    document.getElementById('bus-icon').style.color='white';
    document.getElementById('hotel').style.color='white';
    document.getElementById('hotel-icon').style.color='white';

    train_div.style.display = 'block';
    flight_div.style.display = 'none';
    bus_div.style.display = 'none';
    hotel_div.style.display = 'none';
}

function showPNR(){
    train_details_div.style.display = 'none';
    pnr_div.style.display = 'block';
    train_status.style.display = 'none';
}

function showTicketBooking(){
    train_details_div.style.display = 'block';
    pnr_div.style.display = 'none';
    train_status.style.display = 'none';
}

function showTrainStatus(){
    train_details_div.style.display = 'none';
    pnr_div.style.display = 'none';
    train_status.style.display = 'block';
}

function aeroplane(){
    document.getElementById('train').style.color='white';
    document.getElementById('train-icon').style.color='white';
    document.getElementById('aeroplane').style.color='blue';
    document.getElementById('aeroplane-icon').style.color='blue';
    document.getElementById('bus').style.color='white';
    document.getElementById('bus-icon').style.color='white';
    document.getElementById('hotel').style.color='white';
    document.getElementById('hotel-icon').style.color='white';
    train_div.style.display = 'none';
    flight_div.style.display = 'block';
    bus_div.style.display = 'none';
    hotel_div.style.display = 'none';
}

function bus(){
    document.getElementById('train').style.color='white';
    document.getElementById('train-icon').style.color='white';
    document.getElementById('aeroplane').style.color='white';
    document.getElementById('aeroplane-icon').style.color='white';
    document.getElementById('bus').style.color='blue';
    document.getElementById('bus-icon').style.color='blue';
    document.getElementById('hotel').style.color='white';
    document.getElementById('hotel-icon').style.color='white';
    train_div.style.display = 'none';
    flight_div.style.display = 'none';
    bus_div.style.display = 'block';
    hotel_div.style.display = 'none';
}

function hotel(){
    document.getElementById('train').style.color='white';
    document.getElementById('train-icon').style.color='white';
    document.getElementById('aeroplane').style.color='white';
    document.getElementById('aeroplane-icon').style.color='white';
    document.getElementById('bus').style.color='white';
    document.getElementById('bus-icon').style.color='white';
    document.getElementById('hotel').style.color='blue';
    document.getElementById('hotel-icon').style.color='blue';
    train_div.style.display = 'none';
    flight_div.style.display = 'none';
    bus_div.style.display = 'none';
    hotel_div.style.display = 'block';
}