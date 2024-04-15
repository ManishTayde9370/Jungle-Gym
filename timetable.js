// Gym routine data
const gymRoutine = {
    "Day 1: Chest and Triceps": [
        "Bench press",
        "Incline Dumbbell press",
        "Chest Flyes",
        "Dips",
        "Overhead Tricep Extension",
        "Tricep Pushdowns",
        "Tricep Dips"
    ],
    "Day 2: Back and Biceps": [
        "Deadlifts",
        "Lat Pulldowns",
        "Barbell Rows",
        "Seated row",
        "Hammer Curls",
        "Face Pulls",
        "Barbell or Dumbbell Shrugs"
    ],
    "Day 3: Legs and Shoulder": [
        "Front Squat",
        "Lunges",
        "Legs press",
        "Calf Raises",
        "Overhead Press",
        "Lateral Raises",
        "Front Raises"
    ],
    "Day 4: Chest and Triceps": [
        "Dumbbell Bench Press",
        "Decline Bench Press",
        "Flat Dumbbell Flye",
        "Peckdek flye",
        "Tricep Kickbacks",
        "Close-Grip Bench Press",
        "Cable Crossovers"
    ],
    "Day 5: Back and Biceps": [
        "Pull-ups",
        "Lat pulldown",
        "T- Bar Row",
        "Dumbbell Pullover",
        "Concentration Curls",
        "Cable Row",
        "Preacher Curls"
    ],
    "Day 6: Shoulder and Legs": [
        "Military press",
        "Side Lateral Raise",
        "Face pull",
        "Shrugs",
        "Squats",
        "Seated Leg Extension",
        "Leg curls",
        "Seated calf"
    ]
};

// Function to populate the timetable with gym routine data
function populateTimetable() {
    const timetable = document.getElementById('timetable');
    const tbody = timetable.getElementsByTagName('tbody')[0];

    for (let i = 0; i < 7; i++) {
        const row = document.createElement('tr');
        const time = document.createElement('td');
        time.textContent = "8:00 AM"; // Set the time for each row (can be dynamic)

        for (const day in gymRoutine) {
            const exercise = document.createElement('td');
            exercise.textContent = gymRoutine[day][i] || ""; // Set the exercise for each day
            row.appendChild(exercise);
        }

        tbody.appendChild(row);
    }
}

// Call the function to populate the timetable
populateTimetable();
