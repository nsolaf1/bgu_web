let students = [
    { name: 'Aibek', grade: 92 },
    { name: 'Mirbek', grade: 76 },
    { name: 'Ali', grade: 85 }
    // Add more students here
  ];

  console.log(students[1].grade);



  function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  
    return (
      <form>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
        />
      </form>
    );
  }
  