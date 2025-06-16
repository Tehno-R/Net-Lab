// function drawSmiley(svg) {
//     let smiley = svg.append("g")
//         .attr("transform", "translate(0, 0)");
//
//     // Голова (желтый круг)
//     smiley.append("circle")
//         .attr("cx", 0)
//         .attr("cy", 0)
//         .attr("r", 50)
//         .style("fill", "yellow")
//         .style("stroke", "gold")
//         .style("stroke-width", 2);
//
//     // Левый глаз (круг)
//     smiley.append("circle")
//         .attr("cx", -20)
//         .attr("cy", -15)
//         .attr("r", 8)
//         .style("fill", "black");
//
//     // Правый глаз (круг)
//     smiley.append("circle")
//         .attr("cx", 20)
//         .attr("cy", -15)
//         .attr("r", 8)
//         .style("fill", "black");
//
//     // Рот (дуга)
//     smiley.append("path")
//         .attr("d", "M-30,15 A30,20 0 0 0 30,15")
//         .style("fill", "none")
//         .style("stroke", "black")
//         .style("stroke-width", 3);
//
//     // Нос (треугольник)
//     smiley.append("path")
//         .attr("d", "M0,-5 L-5,5 L5,5 Z")
//         .style("fill", "red");
//
//     // Левая бровь (линия)
//     smiley.append("line")
//         .attr("x1", -30)
//         .attr("y1", -30)
//         .attr("x2", -10)
//         .attr("y2", -25)
//         .style("stroke", "black")
//         .style("stroke-width", 3);
//
//     // Правая бровь (линия)
//     smiley.append("line")
//         .attr("x1", 10)
//         .attr("y1", -25)
//         .attr("x2", 30)
//         .attr("y2", -30)
//         .style("stroke", "black")
//         .style("stroke-width", 3);
//
//     // Язык (эллипс)
//     smiley.append("ellipse")
//         .attr("cx", 0)
//         .attr("cy", 25)
//         .attr("rx", 10)
//         .attr("ry", 5)
//         .style("fill", "pink");
//
//     return smiley;
// }

function drawSmiley(svg) {
    let scene = svg.append("g")
        .style("stroke", "black")
        .style("stroke-width", 2)
        .style("fill", "none");

    // Основание дома (1 - прямоугольник)
    scene.append("rect")
        .attr("x", -60)
        .attr("y", -40)
        .attr("width", 120)
        .attr("height", 80)
        .style("fill", "lightblue");

    // Крыша дома (2 - треугольник через путь)
    scene.append("path")
        .attr("d", "M-60 -40 L0 -80 L60 -40 Z")
        .style("fill", "brown");

    // Дверь (3 - прямоугольник)
    scene.append("rect")
        .attr("x", -15)
        .attr("y", 0)
        .attr("width", 30)
        .attr("height", 40)
        .style("fill", "white");

    // Окно (4 - круг)
    scene.append("circle")
        .attr("cx", 30)
        .attr("cy", -10)
        .attr("r", 15)
        .style("fill", "white")
        .style("stroke", "black");

    // Рама окна (5 и 6 - две линии)
    scene.append("line")
        .attr("x1", 30)
        .attr("y1", -25)
        .attr("x2", 30)
        .attr("y2", 5);

    scene.append("line")
        .attr("x1", 15)
        .attr("y1", -10)
        .attr("x2", 45)
        .attr("y2", -10);

    // Дерево (7 - прямоугольник ствол)
    scene.append("rect")
        .attr("x", 80)
        .attr("y", 0)
        .attr("width", 20)
        .attr("height", 60)
        .style("fill", "brown");

    // Крона дерева (8 - круг, хотя это уже будет 8-й примитив)
    scene.append("circle")
        .attr("cx", 90)
        .attr("cy", -30)
        .attr("r", 30)
        .style("fill", "green");

    return scene;
}