function calculateMoles() {
    const mass = parseFloat(document.getElementById('mass').value);
    const molarMass = parseFloat(document.getElementById('molar-mass').value);
    
    if (!isNaN(mass) && !isNaN(molarMass) && molarMass > 0) {
        const result = mass / molarMass;
        displayResult(`จำนวนโมล: ${result.toFixed(2)} mol`);
    } else {
        displayResult('กรุณากรอกข้อมูลที่ถูกต้อง');
    }
}

function calculateConcentration() {
    const massSubstance = parseFloat(document.getElementById('mass-substance-concentration').value);
    const molarMass = parseFloat(document.getElementById('molar-mass-concentration').value);
    const volume = parseFloat(document.getElementById('volume').value);
    
    if (!isNaN(massSubstance) && !isNaN(molarMass) && !isNaN(volume) && molarMass > 0 && volume > 0) {
        const moles = massSubstance / molarMass;
        const result = moles / volume;
        displayResult(`ความเข้มข้น: ${result.toFixed(2)} M`);
    } else {
        displayResult('กรุณากรอกข้อมูลที่ถูกต้อง');
    }
}

function calculatePercentMass() {
    const massSubstance = parseFloat(document.getElementById('mass-substance-percent').value);
    const totalMass = parseFloat(document.getElementById('total-mass').value);
    
    if (!isNaN(massSubstance) && !isNaN(totalMass) && totalMass > 0) {
        const result = (massSubstance / totalMass) * 100;
        displayResult(`เปอร์เซ็นต์มวล: ${result.toFixed(2)} %`);
    } else {
        displayResult('กรุณากรอกข้อมูลที่ถูกต้อง');
    }
}

function calculatePH() {
    const hConcentration = parseFloat(document.getElementById('h-concentration').value);
    
    if (!isNaN(hConcentration) && hConcentration > 0) {
        const result = -Math.log10(hConcentration);
        displayResult(`pH: ${result.toFixed(2)}`);
    } else {
        displayResult('กรุณากรอกข้อมูลที่ถูกต้อง');
    }
}

function calculateIdealGasLaw() {
    const n = parseFloat(document.getElementById('n').value);
    const temperature = parseFloat(document.getElementById('temperature').value);
    const volumeGas = parseFloat(document.getElementById('volume-gas').value);
    
    if (!isNaN(n) && !isNaN(temperature) && !isNaN(volumeGas) && n > 0 && temperature > 0 && volumeGas > 0) {
        const result = (n * 0.0821 * temperature) / volumeGas;
        displayResult(`ความดัน (จากกฎแก๊ส): ${result.toFixed(2)} atm`);
    } else {
        displayResult('กรุณากรอกข้อมูลที่ถูกต้อง');
    }
}

function calculateHeat() {
    const heatMass = parseFloat(document.getElementById('heat-mass').value);
    const specificHeat = parseFloat(document.getElementById('specific-heat').value);
    const deltaT = parseFloat(document.getElementById('delta-T').value);
    
    if (!isNaN(heatMass) && !isNaN(specificHeat) && !isNaN(deltaT) && heatMass > 0 && specificHeat > 0) {
        const result = heatMass * specificHeat * deltaT;
        displayResult(`ความร้อน: ${result.toFixed(2)} J`);
    } else {
        displayResult('กรุณากรอกข้อมูลที่ถูกต้อง');
    }
}

function displayResult(message) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<h3>ผลลัพธ์</h3><p>${message}</p>`;
}
