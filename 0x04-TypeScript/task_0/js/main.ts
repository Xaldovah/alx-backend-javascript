interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'Michigan',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 19,
  location: 'San Antonio',
};

const studentsList: Student[] = [student1, student2];

// Vanilla JavaScript

const table = document.getElementById('studentsTable') as HTMLTableElement | null;

if (table) {
  studentsList.forEach((student) => {
    const row = table.insertRow();

    const cell1 = row.insertCell(0);
    cell1.textContent = student.firstName;

    const cell2 = row.insertCell(1);
    cell2.textContent = student.location;
  });
}
