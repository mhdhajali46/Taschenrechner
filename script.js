let rechnen = "";

function press(char) {
    const display = document.getElementById("display");

    if (char === "C") {
        rechnen = "";
    } else if (char === "⌫") {
        rechnen = rechnen.slice(0, -1);
    } else if (char === "=") {
        try {
            let expr = rechnen.replace(/×/g, "*").replace(/−/g, "-").replace(/√x/g, "**0.5").replace(/x²/g, "**2");
            rechnen = eval(expr).toString();
        } catch {
            rechnen = "Fehler";
        }
    } else if (char === "CE") {
        rechnen = "";
    } else if (char === "+/−") {
        rechnen = rechnen.startsWith("-") ? rechnen.slice(1) : "-" + rechnen;
    } else if (char === "1/x") {
        try {
            rechnen = (1 / eval(rechnen)).toString();
        } catch {
            rechnen = "Fehler";
        }
    } else {
        rechnen += char;
    }

    display.value = rechnen;
}
