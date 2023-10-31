function celsiusTemperature() {
    const celsiusInput = document.getElementById("celsiusInput").value;
    const result = (celsiusInput * 9/5) + 32;
    document.getElementById("result").textContent = result.toFixed(2);
}
function fahrenheitTemperature() {
    const fahrenheitInput = document.getElementById("fahrenheitInput").value;
    const result1 = (fahrenheitInput - 32) * 5/9;
    document.getElementById("result1").textContent = result1.toFixed(2);
}
