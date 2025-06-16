import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";


const coords_html = "" +
    "    <p>Координаты рисунка<br>\n" +
    "        <label for=\"pos_x\">x: </label>\n" +
    "        <input type=\"number\" id=\"pos_x\" value=\"300\" max=\"600\" min=\"0\">\n" +
    "        <label for=\"pos_y\">y: </label>\n" +
    "        <input type=\"number\" id=\"pos_y\" value=\"300\" max=\"600\" min=\"0\">\n" +
    "        <br>\n" +
    "        <label for=\"pos_x_final\">final x: </label>\n" +
    "        <input type=\"number\" id=\"pos_x_final\" value=\"500\" max=\"600\" min=\"0\">\n" +
    "        <label for=\"pos_y_final\">final y: </label>\n" +
    "        <input type=\"number\" id=\"pos_y_final\" value=\"500\" max=\"600\" min=\"0\">\n" +
    "    </p>";

const moveShape_html = "" +
    "        <p>Форма движения:<br>\n" +
    "            <label for=\"moveShape\">Тип анимации:</label>\n" +
    "            <select id=\"moveShape\">\n" +
    "                <option value=\"1\">1</option>\n" +
    "                <option value=\"2\">2</option>\n" +
    "                <option value=\"3\">3</option>\n" +
    "            </select>\n" +
    "        </p>";

let shapeBool = false
document.addEventListener("DOMContentLoaded", function() {
    const width = 600;
    const height = 600;
    const svg = d3.select("svg")
        .attr("width", width)
        .attr("height", height) ;

    const animateCheck = document.getElementById("animCheck")
    const byShapeCheck = document.getElementById("byShape")
    const animSettings = document.getElementById("animParam")
    const formShapes = document.getElementById("moveBy")
    animateCheck.addEventListener('change', function() {
        if (this.checked) {
            animSettings.style.display = "block";
        } else {
            animSettings.style.display = "none";
        }
    });
    byShapeCheck.addEventListener('change', function() {
        if (this.checked) {
            formShapes.innerHTML = moveShape_html;
            shapeBool = true
        } else {
            formShapes.innerHTML = coords_html;
            shapeBool = false
        }
    });
})
let pict = null;

let makePict = () => {
    const svg = d3.select("svg")
    pict = drawSmile(svg)
}

let draw = (dataForm) => {
    if (pict == null) makePict()
    pict.attr("transform",
        `translate(${dataForm.pos_x.value}, ${dataForm.pos_y.value}), 
        scale(${dataForm.scale_x.value}, ${dataForm.scale_y.value}),
        rotate(${dataForm.angle.value})`
    );
}

let runAnimation = (dataForm) => {
    if (pict == null) makePict()
    if (shapeBool) {
        let path = drawPath(parseInt(dataForm.moveShape.value));
        pict.transition()
            .ease(d3.easeLinear) // установить в зависимости от настроек формы
            .duration(6000)
            .attrTween('transform', translateAlong(path.node()));
    } else {
        let animType = {Linear: d3.easeLinear, Bounce: d3.easeBounce, Elastic: d3.easeElastic}
        pict.attr("transform", `translate(${dataForm.pos_x.value}, ${dataForm.pos_y.value}), 
        scale(${dataForm.scale_x.value}, ${dataForm.scale_y.value}),
        rotate(${dataForm.angle.value})`)
            .transition()
            .duration(6000)
            .ease(animType[dataForm.easingType.value])
            .attr("transform", `translate(${dataForm.pos_x_final.value}, ${dataForm.pos_y_final.value}), 
        scale(${dataForm.scale_x_final.value}, ${dataForm.scale_y_final.value}),
        rotate(${dataForm.angle_final.value})`);
        }
    }
