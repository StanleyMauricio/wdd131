document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  const lastMod = document.lastModified;

  document.getElementById("currentyear").textContent = year;
  document.getElementById("lastModified").textContent = `Last Modification: ${lastMod}`;

  const temp = parseFloat(document.getElementById("temp").textContent);
  const wind = parseFloat(document.getElementById("wind").textContent);
  const windChillSpan = document.getElementById("windChill");

  function calculateWindChill(t, v) {
    return (
      13.12 +
      0.6215 * t -
      11.37 * Math.pow(v, 0.16) +
      0.3965 * t * Math.pow(v, 0.16)
    ).toFixed(1) + " °C";
  }

  if (temp <= 10 && wind > 4.8) {
    windChillSpan.textContent = calculateWindChill(temp, wind);
  } else {
    windChillSpan.textContent = "N/A";
  }
});
