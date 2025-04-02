document.getElementById("showInputs").addEventListener("click", updateInputs);
document.getElementById("calculate").addEventListener("click", calculateTriangle);
document.getElementById("clear").addEventListener("click", clearFields);

function updateInputs() {
    const type = document.getElementById("inputType").value;
    const input3 = document.getElementById("input3");
    const label3 = document.getElementById("label3");
    const img = document.getElementById("triangleImage");

    resetRedBorders();

    if (type === "twoSidesAngle") {
        label3.textContent = "Угол C (°):";
        input3.type = "number";
        input3.min = 0;
        input3.max = 180;
        img.src = "triangle1.png";
    } else {
        label3.textContent = "Сторона c:";
        input3.type = "number";
        input3.min = 0;
        img.src = "triangle2.png";
    }
}

function calculateTriangle() {
    const type = document.getElementById("inputType").value;
    const a = parseFloat(document.getElementById("input1").value);
    const b = parseFloat(document.getElementById("input2").value);
    const c_or_angle = parseFloat(document.getElementById("input3").value);
    const selectedCalculations = Array.from(document.getElementById("calculations").selectedOptions).map(opt => opt.value);
    const resultsDiv = document.getElementById("results");

    resetRedBorders();

    if (isNaN(a) || a <= 0) {
        setRedBorder("input1"); 
        resultsDiv.innerHTML = "<p id='error'>Ошибка: введено неверное значение</p>";
        return
    }
    if (isNaN(b) || b <= 0) {
        setRedBorder("input2"); 
        resultsDiv.innerHTML = "<p id='error'>Ошибка: введено неверное значение</p>";
        return
    }
    if (isNaN(c_or_angle) || c_or_angle <= 0) {
        setRedBorder("input3"); 
        resultsDiv.innerHTML = "<p id='error'>Ошибка: введено неверное значение</p>";
        return
    }

    // Проверка на существование треугольника, если вводим три стороны
    if (type === "threeSides") {
        if (!(a + b > c_or_angle && a + c_or_angle > b && b + c_or_angle > a)) {
            // setRedBorder("input1");
            // setRedBorder("input2");
            // setRedBorder("input3");
            resultsDiv.innerHTML = "<p id='error'>Ошибка: такие стороны не могут образовать треугольник!</p>";
            return;
        }
    }

    // Проверка угла, если выбираем "две стороны и угол"
    if (type === "twoSidesAngle") {
        if (c_or_angle >= 180 || c_or_angle <= 0) {
            setRedBorder("input3");
            resultsDiv.innerHTML = "<p id='error'>Ошибка: угол должен быть в диапазоне от 0 до 180 градусов!</p>";
            return;
        }
    }

    // Проверка на выбор хотя бы одного параметра для вычислений
    if (selectedCalculations.length === 0) {
        setRedBorder("calculations");
        resultsDiv.innerHTML = "<p id='error'>Ошибка: выберите хотя бы одно значение для вычисления!</p>";
        return;
    }

    let S, R, r, h_a, h_b, h_c;

    if (type === "twoSidesAngle") {
        // Переводим угол в радианы
        const C = (Math.PI / 180) * c_or_angle;

        // Теорема косинусов: находим третью сторону
        const c = Math.sqrt(a**2 + b**2 - 2 * a * b * Math.cos(C)); // c² = a² + b² - 2ab cos(C)

        // Формула площади через две стороны и угол
        S = 0.5 * a * b * Math.sin(C); // S = 1/2 * a * b * sin(C)

        // Радиус описанной окружности
        R = (a * b * c) / (4 * S); // R = (a * b * c) / (4S)

        // Радиус вписанной окружности
        r = S / ((a + b + c) / 2); // r = S / p (где p - полупериметр)

        // Высоты треугольника
        h_a = (2 * S) / a; // h_a = 2S / a
        h_b = (2 * S) / b; // h_b = 2S / b
        h_c = (2 * S) / c; // h_c = 2S / c

    } else {
        const c = c_or_angle;

        // Полупериметр
        const p = (a + b + c) / 2; // p = (a + b + c) / 2

        // Формула Герона для площади
        S = Math.sqrt(p * (p - a) * (p - b) * (p - c)); // S = sqrt(p * (p - a) * (p - b) * (p - c))

        // Радиус описанной окружности
        R = (a * b * c) / (4 * S); // R = (a * b * c) / (4S)

        // Радиус вписанной окружности
        r = S / p; // r = S / p

        // Высоты треугольника
        h_a = (2 * S) / a; // h_a = 2S / a
        h_b = (2 * S) / b; // h_b = 2S / b
        h_c = (2 * S) / c; // h_c = 2S / c
    }

    let resultHTML = "<h3>Результаты:</h3>";
    
    if (selectedCalculations.includes("height")) {
        resultHTML += `<p>Высота на сторону a: ${h_a.toFixed(2)}</p>`;
        resultHTML += `<p>Высота на сторону b: ${h_b.toFixed(2)}</p>`;
        resultHTML += `<p>Высота на сторону c: ${h_c.toFixed(2)}</p>`;
    }

    if (selectedCalculations.includes("circumradius")) resultHTML += `<p>Радиус описанной окружности: ${R.toFixed(2)}</p>`;
    if (selectedCalculations.includes("inradius")) resultHTML += `<p>Радиус вписанной окружности: ${r.toFixed(2)}</p>`;
    if (selectedCalculations.includes("area")) resultHTML += `<p>Площадь: ${S.toFixed(2)}</p>`;

    resultsDiv.innerHTML = resultHTML;
}

function clearFields() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("results").innerHTML = "";
    resetRedBorders();
}

function setRedBorder(id) {
    resetRedBorders()
    const element = document.getElementById(id);
    element.classList.add("error");
    element.addEventListener("click", removeRedBorder); 
}

function removeRedBorder(event) {
    event.target.classList.remove("error");
    event.target.removeEventListener("click", removeRedBorder);
}

function resetRedBorders() {
    const inputs = document.querySelectorAll("input, select");
    inputs.forEach(input => input.classList.remove("error"));
}
