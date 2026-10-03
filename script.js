function hitungNilai() {
    let tugas = Number(document.getElementById("tugas").value);
    let uts = Number(document.getElementById("uts").value);
    let uas = Number(document.getElementById("uas").value);

    if (tugas === 0 || uts === 0 || uas === 0) {
        document.getElementById("hasil").innerHTML =
            "Silakan isi semua nilai terlebih dahulu.";
        return;
    }

    let nilaiAkhir = (tugas * 0.3) + (uts * 0.3) + (uas * 0.4);

    let predikat;

    if (nilaiAkhir >= 90) {
        predikat = "A";
    } else if (nilaiAkhir >= 80) {
        predikat = "B";
    } else if (nilaiAkhir >= 70) {
        predikat = "C";
    } else if (nilaiAkhir >= 60) {
        predikat = "D";
    } else {
        predikat = "E";
    }

    document.getElementById("hasil").innerHTML =
        `Nilai Akhir: ${nilaiAkhir.toFixed(2)}<br>Predikat: ${predikat}`;
}