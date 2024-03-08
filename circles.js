// result_files/Population_Density_Americas_score_6386.000479.txt
// Score: 6386.00 (n=23, k=74, overlap=2.03, distance=11.96, angle=11.51)
const k = 74;
const circleData = `
-19.652823140399 0.054011188454 0.4434711565216687 ECU 0
-18.129800273366 0.396433580437 0.1036375450343201 SUR 1
-18.237739683654 -0.019002486679 0.2638742686008435 BRA 2
-18.523200238989 -0.814905547630 0.2116950987028621 ARG 3
-20.454241426358 2.586114814578 0.3962789888917120 NIC 4
-22.448302309439 4.945496890348 0.2202691955733229 BLZ 5
-18.642612017698 -0.453780444101 0.1753303759784389 BOL 6
-21.065352943655 3.223096092847 0.5040576098761671 HND 7
-18.261555412656 -0.487697557321 0.2151657414559670 PRY 8
-22.342759123694 5.813691850788 0.1071516751221439 CAN 9
-18.088128968018 -0.887126834841 0.2293307493394484 URY 10
-22.010214300704 2.206702399913 0.9079892314584153 SLV 11
-23.118233473908 5.004732073494 0.4211975871338862 MEX 12
-20.445370294623 1.684468590068 0.5235208439728769 CRI 13
-19.656174099833 1.143720115216 0.4018475848894479 PAN 14
-22.435322832536 4.070319686888 0.6730252320403464 GTM 15
-18.403446610519 0.720822166947 0.2962731472438527 VEN 16
-18.997867840983 -0.762663424162 0.2659713156352404 CHL 17
-19.014793087815 -0.229798921632 0.2680519573736632 PER 18
-22.557377182499 5.459367210970 0.3156416158075964 USA 19
-18.940056302763 0.375929114618 0.3548604316149176 COL 20
-17.994245958578 0.249944508737 0.1000000000000000 GUF 21
-18.327182665533 0.334763959212 0.1054092553389460 GUY 22
`
const edges = [
    {node0: 'ARG', node1: 'BOL', target_angle: -1.5120405040791740},
    {node0: 'ARG', node1: 'BRA', target_angle: -1.9295669970654687},
    {node0: 'ARG', node1: 'CHL', target_angle: -0.5191461142465229},
    {node0: 'ARG', node1: 'PRY', target_angle: -2.0701430484750265},
    {node0: 'ARG', node1: 'URY', target_angle: -3.0172376590430319},
    {node0: 'BOL', node1: 'BRA', target_angle: -2.5308666892005847},
    {node0: 'BOL', node1: 'CHL', target_angle: 1.1383885512243588},
    {node0: 'BOL', node1: 'PRY', target_angle: 2.4329663814621232},
    {node0: 'BOL', node1: 'PER', target_angle: -0.5667292175235064},
    {node0: 'BRA', node1: 'COL', target_angle: -0.6889243882148613},
    {node0: 'BRA', node1: 'GUF', target_angle: -1.7126933813990606},
    {node0: 'BRA', node1: 'GUY', target_angle: -1.3101939350475555},
    {node0: 'BRA', node1: 'PRY', target_angle: 1.3439974787410107},
    {node0: 'BRA', node1: 'PER', target_angle: 0.0000000000000000},
    {node0: 'BRA', node1: 'SUR', target_angle: -1.4994888620096063},
    {node0: 'BRA', node1: 'URY', target_angle: 1.5273454314033659},
    {node0: 'BRA', node1: 'VEN', target_angle: -1.0222469243443686},
    {node0: 'BLZ', node1: 'GTM', target_angle: 0.8818719385800330},
    {node0: 'BLZ', node1: 'MEX', target_angle: -0.4139990026121998},
    {node0: 'CAN', node1: 'USA', target_angle: 1.4801364395941514},
    {node0: 'CHL', node1: 'PER', target_angle: -1.3258176636680326},
    {node0: 'COL', node1: 'ECU', target_angle: 0.8288490587889792},
    {node0: 'COL', node1: 'PAN', target_angle: -0.5585993153435624},
    {node0: 'COL', node1: 'PER', target_angle: 1.2924966677897853},
    {node0: 'COL', node1: 'VEN', target_angle: -2.5535900500422257},
    {node0: 'CRI', node1: 'NIC', target_angle: -1.2490457723982544},
    {node0: 'CRI', node1: 'PAN', target_angle: 2.8966139904629289},
    {node0: 'ECU', node1: 'PER', target_angle: 1.7561442767905915},
    {node0: 'GUF', node1: 'SUR', target_angle: 0.0000000000000000},
    {node0: 'GTM', node1: 'SLV', target_angle: 2.2236429578956702},
    {node0: 'GTM', node1: 'HND', target_angle: 3.0072712116368248},
    {node0: 'GTM', node1: 'MEX', target_angle: -0.5661806712263594},
    {node0: 'GUY', node1: 'SUR', target_angle: 2.8198420991931510},
    {node0: 'GUY', node1: 'VEN', target_angle: -0.4048917862850834},
    {node0: 'HND', node1: 'SLV', target_angle: 0.4636476090008049},
    {node0: 'HND', node1: 'NIC', target_angle: 2.2142974355881808},
    {node0: 'MEX', node1: 'USA', target_angle: -1.8925468811915389},
];


const svgCanvas = document.getElementById('svgCanvas');
let lastTime = 0;
let lastScore = 0;
let selectedCircle = null;
let offset = { x: 0, y: 0 };
let circlePosition = { x: 0, y: 0 };

function calcRelativeDistance(circle1, circle2) {
    if (circle1 === circle2) return 0;
    const x1 = parseFloat(circle1.getAttribute('cx'));
    const y1 = parseFloat(circle1.getAttribute('cy'));
    const x2 = parseFloat(circle2.getAttribute('cx'));
    const y2 = parseFloat(circle2.getAttribute('cy'));
    const dist = Math.hypot(x1 - x2, y1 - y2);
    const R = parseFloat(circle1.getAttribute('r')) + parseFloat(circle2.getAttribute('r'));
    return dist < R ? 0 : (dist - R) / R;
}

function calcAngle(circle1, circle2) {
    if (circle1 === circle2) return 0;
    const x1 = parseFloat(circle1.getAttribute('cx'));
    const y1 = parseFloat(circle1.getAttribute('cy'));
    const x2 = parseFloat(circle2.getAttribute('cx'));
    const y2 = parseFloat(circle2.getAttribute('cy'));
    return Math.atan2(y2 - y1, x1 - x2); // y2 - y1 because y-axis is inverted in SVG
}

function calcAngleDifference(targetAngle, currentAngle) {
    const diff = Math.abs(targetAngle - currentAngle);
    return Math.min(diff, 2 * Math.PI - diff);
}

function calcMaxRelativeOverlap(circleElements) {
    let maxOverlap = 0;
    const circleArray = Object.values(circleElements).map(element => element.querySelector('circle'));

    for (let i = 0; i < circleArray.length; i++) {
        for (let j = i + 1; j < circleArray.length; j++) {
            const overlap = calcRelativeOverlap(circleArray[i], circleArray[j]);
            maxOverlap = Math.max(maxOverlap, overlap);
        }
    }

    return maxOverlap * 100;
}

function calcRelativeOverlap(circle1, circle2) {
    if (circle1 === circle2) return 0;
    const x1 = parseFloat(circle1.getAttribute('cx'));
    const y1 = parseFloat(circle1.getAttribute('cy'));
    const r1 = parseFloat(circle1.getAttribute('r'));
    const x2 = parseFloat(circle2.getAttribute('cx'));
    const y2 = parseFloat(circle2.getAttribute('cy'));
    const r2 = parseFloat(circle2.getAttribute('r'));
    const dist = Math.hypot(x1 - x2, y1 - y2);
    const R = r1 + r2;
    return dist >= R ? 0 : (R - dist) / R;
}

function calcScore(circleElements, k) {
    const edges = svgCanvas.querySelectorAll('line');
    const n = Object.keys(circleElements).length;
    const overlap = calcMaxRelativeOverlap(circleElements);

    const distances = Array.from(edges).map(edge => parseFloat(edge.getAttribute('data-relative-distance')));
    const angleDiffs = Array.from(edges).map(edge => parseFloat(edge.getAttribute('data-angle-difference')));

    const distanceAvg = distances.reduce((sum, val) => sum + val, 0) / distances.length * 100;
    const angleDiffAvg = angleDiffs.reduce((sum, val) => sum + val, 0) / angleDiffs.length * 100 / Math.PI;

    const totalScore = 1000.0 * (n + k) / (1 + 0.1 * (overlap ** 2) + 0.05 * (distanceAvg ** 2) + 0.05 * (angleDiffAvg ** 2));

    return {
        nodeCount: n,
        maxOverlap: overlap,
        averageDistance: distanceAvg,
        averageAngleDifference: angleDiffAvg,
        totalScore: totalScore
    };
}


function updateEdgeInfo(edge, circle1, circle2) {
    const currentAngle = calcAngle(circle1, circle2);
    const targetAngle = parseFloat(edge.getAttribute('data-target-angle'));
    const relativeDistance = calcRelativeDistance(circle1, circle2);
    const angleDifference = calcAngleDifference(targetAngle, currentAngle);

    // Update the edge with new data attributes for angle and distance
    edge.setAttribute('data-current-angle', currentAngle);
    edge.setAttribute('data-relative-distance', relativeDistance);
    edge.setAttribute('data-angle-difference', angleDifference);
}

function updateAllConnectedEdges(circle, circleElements) {
    const name = circle.getAttribute('data-name');
    const connectedEdges = svgCanvas.querySelectorAll(`line[data-node0="${name}"], line[data-node1="${name}"]`);

    connectedEdges.forEach(edge => {
        const name1 = edge.getAttribute('data-node0');
        const name2 = edge.getAttribute('data-node1');
        // the order Circle1, Circle2 must be identical to node0, node1 in edges, since it is relevant for the angel calculation
        const circle1 = circleElements[name1].querySelector('circle');
        const circle2 = circleElements[name2].querySelector('circle');
        updateEdgeInfo(edge, circle1, circle2);
    });
}


function createSVGElement(type, attributes) {
    const element = document.createElementNS('http://www.w3.org/2000/svg', type);
    Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
    return element;
}

function drawCircles(data) {
    const circleElements = {};
    data.trim().split('\n').forEach(line => {
        const [x, y, radius, name, index] = line.split(' ');
        const circleGroup = createSVGElement('g', { class: 'draggable', 'data-name': name, 'data-index': index });
        circleGroup.append(
            createSVGElement('circle', { cx: x, cy: -y, r: radius, fill: 'rgba(0, 0, 255, 0.5)', 'data-name': name, 'data-index': index })
        );
        svgCanvas.appendChild(circleGroup);
        circleElements[name] = circleGroup;
    });
    return circleElements;
}

function drawEdges(data, circleElements) {
    data.forEach(edgeInfo => {
        const { node0, node1, target_angle } = edgeInfo;

        const circle1 = circleElements[node0].childNodes[0];
        const circle2 = circleElements[node1].childNodes[0];

        if (circle1 && circle2) {
            const x1 = circle1.getAttribute('cx');
            const y1 = circle1.getAttribute('cy');
            const x2 = circle2.getAttribute('cx');
            const y2 = circle2.getAttribute('cy');

            const edge = createSVGElement('line', {
                x1: x1,
                y1: y1,
                x2: x2,
                y2: y2,
                stroke: 'black',
                'stroke-width': "0.1%",
                'data-node0': node0,
                'data-node1': node1,
                'data-target-angle': target_angle
            });
            svgCanvas.insertBefore(edge, svgCanvas.firstChild); // Draw edges below the circles

            // Calculate and set initial edge information
            updateEdgeInfo(edge, circle1, circle2);
        }
    });
}

function initDragAndDrop() {
    ['mousedown', 'mousemove', 'mouseup', 'mouseleave'].forEach(event => svgCanvas.addEventListener(event, handleDrag));
}

let bestState = '';
function handleDrag(evt) {
    if (evt.type === 'mousedown') {
        let target = evt.target.closest('.draggable');
        if (target) {
            selectedCircle = target;
            const circle = selectedCircle.querySelector('circle');
            const matrix = target.getScreenCTM();
            const point = svgCanvas.createSVGPoint();
            point.x = evt.clientX;
            point.y = evt.clientY;
            const transformedPoint = point.matrixTransform(matrix.inverse());
            offset.x = transformedPoint.x - parseFloat(circle.getAttribute('cx'));
            offset.y = transformedPoint.y - parseFloat(circle.getAttribute('cy'));
            circlePosition.x = parseFloat(circle.getAttribute('cx'));
            circlePosition.y = parseFloat(circle.getAttribute('cy'));
        }
    } else if (evt.type === 'mousemove' && selectedCircle) {
        const currentTime = Date.now();
        if (currentTime - lastTime < 16) return; // Throttle to 60fps
        lastTime = currentTime;
        const point = svgCanvas.createSVGPoint();
        point.x = evt.clientX;
        point.y = evt.clientY;
        const matrix = selectedCircle.getScreenCTM();
        const transformedPoint = point.matrixTransform(matrix.inverse());
        circlePosition.x = transformedPoint.x - offset.x;
        circlePosition.y = transformedPoint.y - offset.y;
        requestAnimationFrame(updateCirclePosition);

        const scoreData = calcScore(circleElements, k);
        console.log('Score Data:', scoreData);
        if (scoreData.totalScore > lastScore) {
            lastScore = scoreData.totalScore;
            bestState = outputCirclePositions(circleElements);
        }
    } else if (evt.type === 'mouseup' || evt.type === 'mouseleave') {
        saveState();
        selectedCircle = null;
        const scoreData = calcScore(circleElements, k);
        lastScore = scoreData.totalScore;
        console.log('After transformation Score:', scoreData);
    }
}

function updateCirclePosition() {
    if (selectedCircle) {
        const circle = selectedCircle.querySelector('circle');
        circle.setAttribute('cx', circlePosition.x);
        circle.setAttribute('cy', circlePosition.y);

        // Update the positions of the edges connected to this circle
        updateEdgePositions(circle, circleElements);

        // Update edge information for all connected edges
        updateAllConnectedEdges(circle, circleElements);
    }
}

function updateEdgePositions(circle, circleElements) {
    // Extract the name of the circle being updated
    const name = circle.getAttribute('data-name');

    // Find all edges connected to the circle
    const connectedEdges = svgCanvas.querySelectorAll(`line[data-node0="${name}"], line[data-node1="${name}"]`);

    connectedEdges.forEach(edge => {
        // Determine which end of the edge needs to be updated
        const name1 = edge.getAttribute('data-node0');
        const name2 = edge.getAttribute('data-node1');
        const targetName = name === name1 ? name2 : name1;
        const targetCircle = circleElements[targetName].querySelector('circle');

        // Update the position of the edge
        if (name === name1) {
            edge.setAttribute('x1', circle.getAttribute('cx'));
            edge.setAttribute('y1', circle.getAttribute('cy'));
        } else {
            edge.setAttribute('x2', circle.getAttribute('cx'));
            edge.setAttribute('y2', circle.getAttribute('cy'));
        }

        // If the target circle is also being moved, update both ends of the edge
        if (selectedCircle && selectedCircle.getAttribute('data-name') === targetName) {
            edge.setAttribute('x2', targetCircle.getAttribute('cx'));
            edge.setAttribute('y2', targetCircle.getAttribute('cy'));
        }
    });
}

function fitToView() {
    const bounds = Array.from(svgCanvas.querySelectorAll('circle')).reduce((bounds, circle) => {
        const cx = parseFloat(circle.getAttribute('cx'));
        const cy = parseFloat(circle.getAttribute('cy'));
        const r = parseFloat(circle.getAttribute('r'));
        return {
            xMin: Math.min(bounds.xMin, cx - r),
            yMin: Math.min(bounds.yMin, cy - r),
            xMax: Math.max(bounds.xMax, cx + r),
            yMax: Math.max(bounds.yMax, cy + r)
        };
    }, { xMin: Infinity, yMin: Infinity, xMax: -Infinity, yMax: -Infinity });
    svgCanvas.setAttribute('viewBox', `${bounds.xMin} ${bounds.yMin} ${bounds.xMax - bounds.xMin} ${bounds.yMax - bounds.yMin}`);
}

svgCanvas.addEventListener('wheel', function(event) {
    event.preventDefault();
    const zoomSpeed = 0.1;
    const direction = event.deltaY < 0 ? -1 : 1;
    const scaleChange = 1 + zoomSpeed * direction;

    const viewBox = svgCanvas.getAttribute('viewBox').split(' ').map(Number);
    const pt = svgCanvas.createSVGPoint();
    pt.x = event.clientX;
    pt.y = event.clientY;
    const cursorPt = pt.matrixTransform(svgCanvas.getScreenCTM().inverse());

    viewBox[0] += (cursorPt.x - viewBox[0]) * (1 - scaleChange);
    viewBox[1] += (cursorPt.y - viewBox[1]) * (1 - scaleChange);
    viewBox[2] *= scaleChange;
    viewBox[3] *= scaleChange;

    svgCanvas.setAttribute('viewBox', viewBox.join(' '));
});

let isDraggingViewBox = false;
let viewBoxDragStart = { x: 0, y: 0 };
let viewBoxStart = { x: 0, y: 0 };

svgCanvas.addEventListener('mousedown', function(event) {
    if (event.target === svgCanvas || event.target.tagName === 'svg') {
        isDraggingViewBox = true;
        viewBoxDragStart.x = event.clientX;
        viewBoxDragStart.y = event.clientY;
        const viewBox = svgCanvas.getAttribute('viewBox').split(' ').map(Number);
        viewBoxStart.x = viewBox[0];
        viewBoxStart.y = viewBox[1];
    }
});

svgCanvas.addEventListener('mousemove', function(event) {
    if (isDraggingViewBox) {
        event.preventDefault();
        const dx = event.clientX - viewBoxDragStart.x;
        const dy = event.clientY - viewBoxDragStart.y;
        const scale = svgCanvas.viewBox.baseVal.width / svgCanvas.clientWidth;
        const viewBox = svgCanvas.getAttribute('viewBox').split(' ').map(Number);
        viewBox[0] = viewBoxStart.x - dx * scale;
        viewBox[1] = viewBoxStart.y - dy * scale;
        svgCanvas.setAttribute('viewBox', viewBox.join(' '));
    }
});

svgCanvas.addEventListener('mouseup', function(event) {
    isDraggingViewBox = false;
});

svgCanvas.addEventListener('mouseleave', function(event) {
    isDraggingViewBox = false;
});

/* Undo/Redo History */
let history = [];
let currentIndex = -1; // Start with -1 because no action has been taken yet
function saveState() {
    // Save the current state of the circles
    const state = outputCirclePositions(circleElements);
    // If we're in the middle of the history, remove all future states
    if (currentIndex < history.length - 1) {
        history = history.slice(0, currentIndex + 1);
    }
    // Add the new state to the history and increment the current index
    history.push(state);
    currentIndex++;
}

function undo() {
    if (currentIndex > 0) {
        currentIndex--;
        const prevState = history[currentIndex];
        restoreState(prevState);
    }
}

function redo() {
    if (currentIndex < history.length - 1) {
        currentIndex++;
        const nextState = history[currentIndex];
        restoreState(nextState);
    }
}

function restoreState(state) {
    // Clear the current circles and edges
    while (svgCanvas.firstChild) {
        svgCanvas.removeChild(svgCanvas.firstChild);
    }
    // Draw the circles from the saved state
    circleElements = drawCircles(state);
    // Redraw the edges
    drawEdges(edges, circleElements);
    // Update the score
    const scoreData = calcScore(circleElements, k);
    console.log('Score Data:', scoreData);
    lastScore = scoreData.totalScore;
}

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'z') {
        if (event.shiftKey) {
            redo();
        } else {
            undo();
        }
    } else if (event.ctrlKey && event.key === 'y') {
        redo();
    } else if (event.ctrlKey && event.key === 'b') {
        restoreState(bestState);
    }
});

/* Save Positions */
function outputCirclePositions(circleElements) {
    // Create an array to store the formatted circle data
    const circles = [];

    // Iterate over each circle element and extract the necessary attributes
    Object.keys(circleElements).forEach(key => {
        const circleElement = circleElements[key].querySelector('circle');
        const name = circleElement.getAttribute('data-name');
        const index = circleElement.getAttribute('data-index');
        const x = parseFloat(circleElement.getAttribute('cx')).toFixed(9);
        const y = parseFloat(circleElement.getAttribute('cy')).toFixed(9) * -1.0; // transform y-axis back
        const radius = circleElement.getAttribute('r');

        // Push the formatted string into the circles array
        circles.push(`${x} ${y} ${radius} ${name} ${index}`);
    });

    // Sort the circles array by id (index) in ascending order
    circles.sort((a, b) => {
        const indexA = parseInt(a.split(' ')[4], 10);
        const indexB = parseInt(b.split(' ')[4], 10);
        return indexA - indexB;
    });

    // Join the array into a single string with newlines between each circle's data
    return circles.join('\n');
}

let circleElements = {}
function init() {
    circleElements = drawCircles(circleData);
    drawEdges(edges, circleElements);
    initDragAndDrop();
    fitToView();

    const scoreData = calcScore(circleElements, k);
    lastScore = scoreData.totalScore;
    console.log('Score Data:', scoreData);

    saveState();
}

init();








