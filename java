function hitungPajak(){

let income = document.getElementById("income").value;

if(income === ""){
alert("Masukkan penghasilan terlebih dahulu");
return;
}

income = parseFloat(income);

let tax = 0;

if(income <= 60000000){
tax = income * 0.05;
}
else if(income <= 250000000){
tax = income * 0.15;
}
else if(income <= 500000000){
tax = income * 0.25;
}
else{
tax = income * 0.30;
}

document.getElementById("taxResult").innerText =
"Rp " + tax.toLocaleString("id-ID");

}
