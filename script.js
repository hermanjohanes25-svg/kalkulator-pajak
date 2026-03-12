let gaji = parseFloat(document.getElementById("gaji").value);
let ptkp = parseFloat(document.getElementById("status").value);

let brutoTahunan = gaji * 12;

// biaya jabatan 5% maksimal 6 juta
let biayaJabatan = brutoTahunan * 0.05;
if(biayaJabatan > 6000000){
biayaJabatan = 6000000;
}

let netto = brutoTahunan - biayaJabatan;

// PKP
let pkp = netto - ptkp;
if(pkp < 0){
pkp = 0;
}

let pajak = 0;

if(pkp <= 60000000){
pajak = pkp * 0.05;
}
else if(pkp <= 250000000){
pajak = 60000000 * 0.05 +
(pkp - 60000000) * 0.15;
}
else if(pkp <= 500000000){
pajak = 60000000 * 0.05 +
190000000 * 0.15 +
(pkp - 250000000) * 0.25;
}
else if(pkp <= 5000000000){
pajak = 60000000 * 0.05 +
190000000 * 0.15 +
250000000 * 0.25 +
(pkp - 500000000) * 0.30;
}
else{
pajak = 60000000 * 0.05 +
190000000 * 0.15 +
250000000 * 0.25 +
4500000000 * 0.30 +
(pkp - 5000000000) * 0.35;
}

document.getElementById("pajak").innerText =
"Rp " + pajak.toLocaleString("id-ID");

document.getElementById("pajakBulanan").innerText =
"Rp " + (pajak/12).toLocaleString("id-ID");

}