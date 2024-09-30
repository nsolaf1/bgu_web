let students = [
    { name: 'Aibek', grades: [92, 85, 78] },
    { name: 'Mirbek', grades: [76, 80, 68] },
    { name: 'Ali', grades: [85, 90, 89] }
  ];
  
  for (let i = 0; i < students.length; i++) {
    let total = 0;
    
    // Calculate Total Number Of Grades
    for (let j = 0; j < students[i].grades.length; j++) {
      total += students[i].grades[j];
    }
  
    // Calculate Average Grade by Dividing it with TTL Grades
    let average = total / students[i].grades.length;
  
    // Assigning Grade Mark
    let gradeLetter;
    if (average >= 90) {
      gradeLetter = 'A';
    } else if (average >= 80) {
      gradeLetter = 'B';
    } else if (average >= 70) {
      gradeLetter = 'C';
    } else if (average >= 60) {
      gradeLetter = 'D';
    } else {
      gradeLetter = 'F';
    }
  
    console.log(`${students[i].name}: Total = ${total}, Average = ${average.toFixed(2)}, Grade = ${gradeLetter}`);
  }