const Courses = {
    Required: {
        Math: ["MA 121/MA 122", "MA 125/MA 126", "MA 222", "MA 331"],
        CAL: ["HASS 103", "HASS 105", "HSS 371/HPL 455"]
    },
    CS: new Map([
        ['CS 101', 1],
        ['CS 115', 1],
        ['CS 135', 2],
        ['CS 284', 2],
        ['CS 382', 3],
        ['CS 385', 3],
        ['CS 392', 4],
        ['CS 496', 4],
        ['CS 334', 5],
        ['CS 396', 5]
    ]),
    General: {
        Business: {
            Lower: ["BT 200", "BT 221", "BT 243", "BT 244"],
            Upper: ["BT 301", "BT 350", "BT 353", "BT 370"]
        },
        Science: {
            Lower: ["BIO 181", "BIO 101", "PEP 151", "PEP 152"],
            Upper: ["CH 325", "CH 370", "PEP 320", "PEP 345"]
        },
        Engineering: {
            Lower: ["CE 24", "CHE 226", "EE 250"],
            Upper: ["CE 345", "CE 410", "CHE 421"]
        },
        Humanities: {
            Lower: ["HAR 144 Introduction to Photography", "HAR 260 Game Design 1", "HHS 125 U.S. History to 1865", "HHS 126 U.S. History since 1865", "HLI 116 Analysis of Literary Forms", "HLI 227 Introduction to Poetry Writing", "HMU 192 Music Appreciation I", "HMU 201 Music Theory I", "HQSS 141 Introduction to Sociology", "HQSS 175 Introduction to Psychology"],
            Upper: ["HAR 345 Typography", "HAR 380 Media Culture and Theory", "HHS 310 Social History of Science", "HHS 322 American Cultural History", "HLI 312 Modern Literature", "HLI 318 Caribbean Literature and Culture", "HQSS 365 Health Politics", "HQSS 370 Data Storytelling", "HSSC 357 Aging and Ageism", "HSSC 375 History of Psychology"]
        }
    },
    Technical: {
        AI: ["CS 541 Artificial Intelligence", "CS 544 Health Informatics", "CS 557 Introduction to Natural Language Processing", "CS 559 Machine Learning: Fundamentals and Applications", "CS 582 Causal Inference", "CS 583 Deep Learning", "CS 584 Natural Language Processing"],
        Applications: ["CS 522 Mobile Systems and Applications", "CS 546 Web Programming", "CS 545 Human-Computer Interaction", "CS 566 Smartphone and Mobile Security", "CS 146 Introduction to Web Programming and Project Development", "CS 370 Creative Problem Solving and Team Programming", "CS 574 Object-Oriented Analysis and Design", "CS 537 Interactive Computer Graphics", "CS 526 Enterprise and Cloud Computing", "CS 548 Enterprise Software Architecture and Design", "CS 597 User Experience Design and Programming", "CS 609 Data Management and Exploration on the Web"],
        Systems: ["CS 522 Mobile Systems and Applications", "CS 546 Web Programming", "CS 545 Human-Computer Interaction", "CS 566 Smartphone and Mobile Security", "CS 146 Introduction to Web Programming and Project Development", "CS 370 Creative Problem Solving and Team Programming", "CS 574 Object-Oriented Analysis and Design", "CS 537 Interactive Computer Graphics", "CS 526 Enterprise and Cloud Computing", "CS 548 Enterprise Software Architecture and Design", "CS 597 User Experience Design and Programming ", "CS 609 Data Management and Exploration on the Web"],
        Theory: ["CS 442 Database Management Systems", "CS 503 Discrete Mathematics for Cryptography", "CS 579 Foundations of Cryptography", "CS 643 Formal Verification of Software", "CS 601 Algorithmic Complexity"],
        Security: ["CS 503 Discrete Mathematics for Cryptography", "CS 696 Database Security"]
    }
};

function addCourseToMap(map, courseCode, value) {
    map.set(courseCode, value);
}

function getCategoryCourses(category) {
    return Courses[category];
}

//console.log("Available Required Math Courses:", Courses.Required.Math);

addEventListener('fetch', event => {
    if (event.request.method === 'POST') {
        event.respondWith(handleRequest(event.request));
    }
});

async function handleRequest(request) {
    const body = await request.json();

    const { numCourses, coursesTaken, remainingElectives, interests } = body;
    const courseList = generateSchedule(numCourses, coursesTaken, remainingElectives, interests);

    return new Response(JSON.stringify(courseList), {
        headers: { 'Content-Type': 'application/json' }
    });
}

function generateSchedule(numCourses, coursesTaken, remainingElectives, interests) {
    const maxCourses = numCourses === 'six' ? 6 : numCourses === 'five' ? 5 : 4;
    const schedule = [];

    // Prioritize core courses from arrays
    const allCourses = [...courseArrays.Required_Math, ...courseArrays.Required_CAL, ...Array.from(courseArrays.CS.keys())];
    const availableCourses = allCourses.filter(course => !coursesTaken.includes(course));

    // Add courses to fill up schedule
    while (schedule.length < maxCourses && availableCourses.length > 0) {
        schedule.push(availableCourses.shift());
    }

    return schedule;
}