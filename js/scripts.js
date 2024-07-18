document.addEventListener("DOMContentLoaded", () => {
// Variabel Hitung BMI
const tinggiBadan = document.getElementById('input-tinggi-badan');
const beratBadan = document.getElementById('input-berat-badan');
const hasilNilaiBmi = document.querySelector('.angka-bmi');
const hasilCategory = document.querySelector('.ket-bmi');

// Klasifikasi Hasil BMI
function klasifikasiBmi(bmi){
    if(bmi < 18.5) {
        return "Kekurangan Berat Badan";
    } else if(bmi < 25){
        return "Normal (ideal)";
    } else if(bmi < 30){
        return "Kelebihan Berat Badan";
    } else {
        return "Kegemukan (Obesitas)";
    }
}
// Perhitungan dan menampilkan hasil pada HTML Page
function hitungBmi(event){
    event.preventDefault(); // Mencegah form dari submit secara default

    const tb = parseFloat(tinggiBadan.value) / 100;
    const bb = parseFloat(beratBadan.value);

    let bmi = bb / (tb * tb);
    bmi = bmi.toFixed(2);
    hasilNilaiBmi.textContent = bmi;
    hasilCategory.textContent = `${klasifikasiBmi(parseFloat(bmi))}`;
}

// Reset Button
function resetForm(){
    document.getElementById('bmiform').reset();
    hasilNilaiBmi.textContent = '0.0';
    hasilCategory.textContent = '';
}

// Event Submit dan Reset
document.getElementById('bmiform').addEventListener('submit', hitungBmi);
document.getElementById('reset-button').addEventListener('click', resetForm);

});