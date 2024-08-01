function generateTable() {
    let text = "";
    let num = parseInt(document.getElementById("t1").value);

    if (isNaN(num)) {
        document.getElementById("p1").innerHTML = "Please enter a valid number.";
        return;
    }

    text += "<table>";

    for (let i = 1; i <= 10; i++) {
        text +=
            `<tr>
                <td>${num}</td>
                <td>*</td>
                <td>${i}</td>
                <td>=</td>
                <td>${num * i}</td>
            </tr>`;
    }

    text += "</table>";

    document.getElementById("p1").innerHTML = text;
}

document.getElementById("t1").addEventListener("input", generateTable);