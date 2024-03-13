// result_files/Area_Asia_score_30263.918270.txt
// Score: 30263.92 (n=43, k=156, overlap=0.55, distance=5.22, angle=9.14)
const k = 156;
const circleData = `
72.636864450000 52.314691790000 1.7559590738010999 UZB 0
67.013900450000 31.470566420000 1.4606940775591499 OMN 1
83.027593820000 35.866958450000 1.2774939146464099 LAO 2
84.923160750000 32.095210060000 0.2003270298801970 BRN 3
65.160088720000 47.627382010000 0.4553494053872740 ARM 4
69.364424580000 50.859884340000 1.8342051960368999 TKM 5
81.213469960000 33.289064550000 1.8810128520927600 THA 6
83.492954690000 47.690937690000 8.1783167482293706 CHN 7
66.103267210000 48.401461290000 0.7715408589477840 AZE 8
67.563046860000 33.618399560000 0.7584258945840220 ARE 9
73.581512170000 43.974089150000 2.4657319832950502 PAK 10
61.613648670000 41.208320370000 0.2003270298801970 PSE 11
90.616460690000 25.201054470000 0.3167448456590160 TLS 12
62.397047890000 42.297027400000 1.1302658617937900 SYR 13
76.288246320000 42.741804260000 0.5172421670141329 BTN 14
79.974727020000 37.429495420000 2.1591375775886799 MMR 15
83.497166000000 59.139641300000 3.2825526233126601 MNG 16
92.581079070000 43.925102740000 0.8300084986275750 KOR 17
76.483569310000 41.236756160000 1.0082906056700200 NPL 18
62.179394180000 40.405364380000 0.7844365853758960 JOR 19
64.710103450000 48.833731900000 0.6939531877637400 GEO 20
75.545701320000 52.642562260000 1.1738092756440499 KGZ 21
84.325966810000 37.596668690000 0.0100000000000000 MAC 22
85.799696780000 35.816533910000 1.5102231261810199 VNM 23
77.770128050000 39.679825620000 1.0082906056700200 BGD 24
61.130815570000 40.900971630000 0.3747775555608620 ISR 25
72.557965660000 48.451666870000 2.1200620077888299 AFG 26
61.221533990000 41.541458210000 0.2712440807055630 LBN 27
63.203841760000 35.147382140000 3.8490255339257899 SAU 28
67.817704130000 44.656655040000 3.3700222623709601 IRN 29
64.292104470000 29.504455400000 1.9074948615893199 YEM 30
83.659161560000 30.943831870000 1.5102231261810199 MYS 31
92.295307320000 45.637445670000 0.9106988107745480 PRK 32
67.320069120000 35.476870680000 0.2833052025664950 QAT 33
88.308129790000 40.983498140000 0.0817831674822937 HKG 34
66.149976230000 39.069977780000 0.3469765938818700 KWT 35
72.800562780000 36.812933220000 4.7596117193948499 IND 36
84.171719300000 33.764064960000 1.1183679950726000 KHM 37
87.326914780000 27.353930470000 3.6225419915444999 IDN 38
74.793928690000 50.614662620000 0.9915682089827330 TJK 39
64.698788970000 40.608951700000 1.7387339907281600 IRQ 40
62.524106330000 46.754384240000 2.3232754016976900 TUR 41
74.580370630000 58.050111610000 4.3329645231651002 KAZ 42
`
const edges = [
    {node0: 'ARE', node1: 'OMN', target_angle: 2.3561944901923448},
    {node0: 'ARE', node1: 'SAU', target_angle: -0.1106572211738956},
    {node0: 'AFG', node1: 'CHN', target_angle: -3.0916342578678506},
    {node0: 'AFG', node1: 'IRN', target_angle: 0.0831412318884412},
    {node0: 'AFG', node1: 'PAK', target_angle: 2.6011731533192091},
    {node0: 'AFG', node1: 'TJK', target_angle: -2.3561944901923448},
    {node0: 'AFG', node1: 'TKM', target_angle: -0.9505468408120752},
    {node0: 'AFG', node1: 'UZB', target_angle: -1.4464413322481351},
    {node0: 'ARM', node1: 'AZE', target_angle: -2.9441970937399127},
    {node0: 'ARM', node1: 'GEO', target_angle: -0.9272952180016122},
    {node0: 'ARM', node1: 'IRN', target_angle: 2.3561944901923448},
    {node0: 'ARM', node1: 'TUR', target_angle: 0.0996686524911620},
    {node0: 'AZE', node1: 'GEO', target_angle: -0.3587706702705722},
    {node0: 'AZE', node1: 'IRN', target_angle: 2.1451011569695986},
    {node0: 'AZE', node1: 'TUR', target_angle: 0.1194289260183384},
    {node0: 'BGD', node1: 'IND', target_angle: 0.2984989315861793},
    {node0: 'BGD', node1: 'MMR', target_angle: 2.8966139904629289},
    {node0: 'BRN', node1: 'MYS', target_angle: 0.7378150601204643},
    {node0: 'BTN', node1: 'CHN', target_angle: -2.6642472712161211},
    {node0: 'BTN', node1: 'IND', target_angle: 0.5070985043923369},
    {node0: 'CHN', node1: 'HKG', target_angle: 2.1939956567289625},
    {node0: 'CHN', node1: 'IND', target_angle: 0.4918091759886986},
    {node0: 'CHN', node1: 'KAZ', target_angle: -0.3378781882402784},
    {node0: 'CHN', node1: 'PRK', target_angle: -2.9181160524491601},
    {node0: 'CHN', node1: 'KGZ', target_angle: -0.1973955598498807},
    {node0: 'CHN', node1: 'LAO', target_angle: 1.5707963267948966},
    {node0: 'CHN', node1: 'MAC', target_angle: 2.1569938781512574},
    {node0: 'CHN', node1: 'MNG', target_angle: -1.5707963267948966},
    {node0: 'CHN', node1: 'MMR', target_angle: 1.0768549578753155},
    {node0: 'CHN', node1: 'NPL', target_angle: 0.3217505543966422},
    {node0: 'CHN', node1: 'PAK', target_angle: 0.1418970546041639},
    {node0: 'CHN', node1: 'TJK', target_angle: -0.1171087445668643},
    {node0: 'CHN', node1: 'VNM', target_angle: 1.6233793884058383},
    {node0: 'GEO', node1: 'TUR', target_angle: 0.3392926144540447},
    {node0: 'IDN', node1: 'MYS', target_angle: -0.7853981633974483},
    {node0: 'IDN', node1: 'TLS', target_angle: 2.5620286682964704},
    {node0: 'ISR', node1: 'JOR', target_angle: 2.7468015338900327},
    {node0: 'ISR', node1: 'LBN', target_angle: -1.9809236673363881},
    {node0: 'ISR', node1: 'PSE', target_angle: -2.2455372690184561},
    {node0: 'ISR', node1: 'SYR', target_angle: -2.3114482587377299},
    {node0: 'IND', node1: 'MMR', target_angle: -3.0466409472470368},
    {node0: 'IND', node1: 'NPL', target_angle: -2.2896263264165211},
    {node0: 'IND', node1: 'PAK', target_angle: -0.9600703624056880},
    {node0: 'IRQ', node1: 'IRN', target_angle: 3.0309354324158977},
    {node0: 'IRQ', node1: 'JOR', target_angle: 0.2449786631268641},
    {node0: 'IRQ', node1: 'KWT', target_angle: 2.3561944901923453},
    {node0: 'IRQ', node1: 'SAU', target_angle: 1.6951513213416580},
    {node0: 'IRQ', node1: 'SYR', target_angle: -0.3217505543966422},
    {node0: 'IRQ', node1: 'TUR', target_angle: -0.5880026035475675},
    {node0: 'IRN', node1: 'PAK', target_angle: 3.0244839090229290},
    {node0: 'IRN', node1: 'TUR', target_angle: -0.3708912888126624},
    {node0: 'IRN', node1: 'TKM', target_angle: -2.2896263264165211},
    {node0: 'JOR', node1: 'PSE', target_angle: -0.8960553845713457},
    {node0: 'JOR', node1: 'SAU', target_angle: 2.5535900500422257},
    {node0: 'JOR', node1: 'SYR', target_angle: -2.0344439357957027},
    {node0: 'KGZ', node1: 'KAZ', target_angle: -0.7853981633974483},
    {node0: 'KGZ', node1: 'TJK', target_angle: 0.4636476090008061},
    {node0: 'KGZ', node1: 'UZB', target_angle: 0.0000000000000000},
    {node0: 'KHM', node1: 'LAO', target_angle: -1.5707963267948966},
    {node0: 'KHM', node1: 'THA', target_angle: -0.3805063771123649},
    {node0: 'KHM', node1: 'VNM', target_angle: -1.8925468811915389},
    {node0: 'PRK', node1: 'KOR', target_angle: 1.7359450042095235},
    {node0: 'KWT', node1: 'SAU', target_angle: 1.0101093318120906},
    {node0: 'KAZ', node1: 'TKM', target_angle: 0.7853981633974483},
    {node0: 'KAZ', node1: 'UZB', target_angle: 1.0516502125483738},
    {node0: 'LAO', node1: 'MMR', target_angle: -0.5191461142465229},
    {node0: 'LAO', node1: 'THA', target_angle: 0.5404195002705842},
    {node0: 'LAO', node1: 'VNM', target_angle: 2.0344439357957027},
    {node0: 'LBN', node1: 'SYR', target_angle: -2.6422459319096627},
    {node0: 'MMR', node1: 'THA', target_angle: 1.8490959858000080},
    {node0: 'MYS', node1: 'THA', target_angle: -0.7853981633974483},
    {node0: 'OMN', node1: 'SAU', target_angle: -0.3217505543966422},
    {node0: 'OMN', node1: 'YEM', target_angle: 0.5880026035475675},
    {node0: 'QAT', node1: 'SAU', target_angle: 0.0804710112654608},
    {node0: 'SAU', node1: 'YEM', target_angle: 1.8622531212727638},
    {node0: 'SYR', node1: 'TUR', target_angle: -0.9272952180016122},
    {node0: 'TJK', node1: 'UZB', target_angle: -0.2782996590051113},
    {node0: 'TKM', node1: 'UZB', target_angle: -2.8966139904629289},
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








