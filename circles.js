// result_files/Area_Europe_score_24394.117003.txt
// Score: 24394.12 (n=24, k=94, overlap=0.68, distance=5.70, angle=6.58)
const k = 94;
const circleData = `
1.214454220000 12.528981590000 0.4018573897567730 NLD 0
4.851434650000 9.036325614000 0.4672235785364710 HRV 1
7.237949278000 9.828037985000 0.9588335111622130 ROU 2
5.485359328000 9.884575890000 0.5989352254253530 HUN 3
7.323544392000 8.208973939000 0.6539568597912900 BGR 4
6.430073427000 7.851510633000 0.3148792406148940 MKD 5
3.320784444000 8.903535770000 1.0780202500762499 ITA 6
6.186506828000 8.710281250000 0.5838245145844660 SRB 7
0.772918878200 10.025469790000 1.4586499149789400 FRA 8
4.510459837000 9.700672955000 0.2794371242032430 SVN 9
2.631348974000 11.864356490000 1.1735561522795499 DEU 10
5.280424625000 8.238788188000 0.4443498717346930 BIH 11
-1.785179929000 8.800321575000 1.3969571796236699 ESP 12
5.822207466000 7.640044596000 0.3329430339108880 ALB 13
2.940731460000 13.409278500000 0.4076398076316350 DNK 14
1.056269503000 11.801350430000 0.3430154143301500 BEL 15
4.297435304000 11.462595320000 0.5515934364628861 CZE 16
-3.764352024000 8.831217770000 0.5959080323159970 PRT 17
5.038631690000 10.809202960000 0.4349125615226730 SVK 18
5.769570585000 12.182216050000 1.0981609384823801 POL 19
1.395640010000 11.519998510000 0.1000000000000000 LUX 20
4.005791523000 10.388765520000 0.5686864296949150 AUT 21
6.493218940000 6.832075868000 0.7133976241989920 GRC 22
2.941713190000 10.332826210000 0.3989347517705290 CHE 23
`
const edges = [
    {node0: 'ALB', node1: 'GRC', target_angle: 2.3561944901923448},
    {node0: 'ALB', node1: 'MKD', target_angle: -2.7610862764774295},
    {node0: 'ALB', node1: 'SRB', target_angle: -1.8925468811915389},
    {node0: 'AUT', node1: 'CZE', target_angle: -2.2924511776596579},
    {node0: 'AUT', node1: 'DEU', target_angle: -0.7105383156866818},
    {node0: 'AUT', node1: 'HUN', target_angle: 3.0968464221351781},
    {node0: 'AUT', node1: 'ITA', target_angle: 1.4601391056210009},
    {node0: 'AUT', node1: 'SVK', target_angle: -2.9195107516843120},
    {node0: 'AUT', node1: 'SVN', target_angle: 2.4887460224890199},
    {node0: 'AUT', node1: 'CHE', target_angle: 0.0565434369448168},
    {node0: 'BIH', node1: 'HRV', target_angle: -0.4475199751571708},
    {node0: 'BIH', node1: 'SRB', target_angle: 3.1415926535897931},
    {node0: 'BEL', node1: 'FRA', target_angle: 1.1760052070951348},
    {node0: 'BEL', node1: 'DEU', target_angle: -3.1016139664665028},
    {node0: 'BEL', node1: 'LUX', target_angle: 2.7149651604629170},
    {node0: 'BEL', node1: 'NLD', target_angle: -2.3847581480311040},
    {node0: 'BGR', node1: 'GRC', target_angle: 0.9272952180016122},
    {node0: 'BGR', node1: 'MKD', target_angle: 0.3805063771123657},
    {node0: 'BGR', node1: 'ROU', target_angle: -1.5707963267948966},
    {node0: 'BGR', node1: 'SRB', target_angle: -0.2449786631268641},
    {node0: 'CHE', node1: 'FRA', target_angle: 0.1651486774146268},
    {node0: 'CHE', node1: 'DEU', target_angle: -1.8157749899217608},
    {node0: 'CHE', node1: 'ITA', target_angle: 2.4227626539681686},
    {node0: 'CZE', node1: 'DEU', target_angle: -0.1825598531309072},
    {node0: 'CZE', node1: 'POL', target_angle: -2.6868733787688233},
    {node0: 'CZE', node1: 'SVK', target_angle: 2.8732264426838876},
    {node0: 'DEU', node1: 'DNK', target_angle: -1.7681918866447774},
    {node0: 'DEU', node1: 'FRA', target_angle: 0.6202494859828215},
    {node0: 'DEU', node1: 'LUX', target_angle: 0.4048917862850843},
    {node0: 'DEU', node1: 'NLD', target_angle: -0.4383365598579578},
    {node0: 'DEU', node1: 'POL', target_angle: -3.0509327663890482},
    {node0: 'ESP', node1: 'FRA', target_angle: -2.3561944901923448},
    {node0: 'ESP', node1: 'PRT', target_angle: 0.1243549945467614},
    {node0: 'FRA', node1: 'ITA', target_angle: 2.8535372065391673},
    {node0: 'FRA', node1: 'LUX', target_angle: -2.4061528859142882},
    {node0: 'GRC', node1: 'MKD', target_angle: -1.5707963267948966},
    {node0: 'HRV', node1: 'HUN', target_angle: -2.7610862764774291},
    {node0: 'HRV', node1: 'SRB', target_angle: 2.9267772531881340},
    {node0: 'HRV', node1: 'SVN', target_angle: -1.0121970114513326},
    {node0: 'HUN', node1: 'ROU', target_angle: 2.9441970937399127},
    {node0: 'HUN', node1: 'SRB', target_angle: 1.8925468811915389},
    {node0: 'HUN', node1: 'SVK', target_angle: -1.2847448850775789},
    {node0: 'HUN', node1: 'SVN', target_angle: 0.1973955598498807},
    {node0: 'ITA', node1: 'SVN', target_angle: -2.1730836729298604},
    {node0: 'MKD', node1: 'SRB', target_angle: -1.1441688336680209},
    {node0: 'POL', node1: 'SVK', target_angle: 1.4204248987877619},
    {node0: 'ROU', node1: 'SRB', target_angle: 0.4636476090008061},
];




const svgCanvas = document.getElementById('svgCanvas');
let lastTime = 0;
let bestScore = { totalScore: 0 };
let bestState = '';
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

function outputScore(scoreData) {
    console.log('Score Data:', scoreData);
    // write score to the UI
    document.getElementById('score').innerText = `Score: ${scoreData.totalScore.toFixed(2)}`;
}

function updateBestScore(scoreData, circleElements) {
    if (scoreData.totalScore > bestScore.totalScore) {
        bestScore = scoreData;
        bestState = outputCirclePositions(circleElements);
        document.getElementById('bestScore').innerText = `Best Score: ${bestScore.totalScore.toFixed(2)}`;
    }
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

        // Add event listeners for mouse enter and leave
        circleGroup.addEventListener('mouseenter', function(event) {
            highlightEdges(circleGroup.querySelector('circle'));
        });
        circleGroup.addEventListener('mouseleave', function(event) {
            unhighlightEdges(circleGroup.querySelector('circle'));
        });
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
        outputScore(scoreData);
        updateBestScore(scoreData, circleElements);
    } else if (evt.type === 'mouseup' || evt.type === 'mouseleave') {
        saveState();
        selectedCircle = null;
        const scoreData = calcScore(circleElements, k);
        outputScore(scoreData);
        updateBestScore(scoreData, circleElements);
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





function highlightEdges(circle) {
    // Extract the name of the circle being hovered
    const name = circle.getAttribute('data-name');

    // Find all edges connected to the circle
    const connectedEdges = svgCanvas.querySelectorAll(`line[data-node0="${name}"], line[data-node1="${name}"]`);

    // Highlight each connected edge
    connectedEdges.forEach(edge => {
        edge.classList.add('highlight');
    });
}

function unhighlightEdges(circle) {
    // Extract the name of the circle being unhovered
    const name = circle.getAttribute('data-name');

    // Find all edges connected to the circle
    const connectedEdges = svgCanvas.querySelectorAll(`line[data-node0="${name}"], line[data-node1="${name}"]`);

    // Unhighlight each connected edge
    connectedEdges.forEach(edge => {
        edge.classList.remove('highlight');
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
    outputScore(scoreData);
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
    } else if (event.key === 'b') {
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
    outputScore(scoreData)
    updateBestScore(scoreData, circleElements);
    saveState();
}

init();








