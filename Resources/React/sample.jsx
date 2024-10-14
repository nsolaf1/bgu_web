function MyButton() {
    function handleClick() {
      alert('You clicked me!');
    }
  
    return (
      <button onClick={handleClick}>
        Click me
      </button>
    );
  }



// ----Map() Example
let numbers = [1, 2, 3, 4];

let doubled = numbers.map(num => num * 2);

console.log(doubled); 
// [2, 4, 6, 8]




// ----Map() Example

let students = [
    { name: 'Aibek', grade: 92 },
    { name: 'Mirbek', grade: 76 },
    { name: 'Ali', grade: 85 }
  ];
  
  // Use map to give extra credit
  let updatedStudents = students.map(student => {
    return {
      name: student.name,
      grade: student.grade + 5 // Adding 5 points to each student's grade
    };
  });
  
  console.log("Original Students:");
  console.log(students);
  
  console.log("\nUpdated Students with Extra Credit:");
  console.log(updatedStudents);




  my-next-app/
  │
  ├── components/
  │   ├── Header.js
  │   ├── Footer.js
  │   ├── Button.js
  │
  ├── pages/
  │   ├── index.js
  │   ├── about.js
  │
  ├── public/
  ├── styles/
  ├── package.json
  
  