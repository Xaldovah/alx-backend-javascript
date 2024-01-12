interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher1: Teacher = {
  firstName: 'Aaron',
  fullTimeEmployee: false,
  lastName: 'Sind',
  location: 'London',
  contract: false,
};

const teacher2: Teacher = {
  firstName: 'Jane',
  fullTimeEmployee: true,
  lastName: 'Morgan',
  location: 'Birmingham',
  yearsOfExperience: 6,
  contract: true,
};

const teacher3: Teacher = {
  firstName: 'Berry',
  fullTimeEmployee: false,
  lastName: 'Mann',
  location: 'Manchester',
  contract: true,
};


interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'David',
  fullTimeEmployee: true,
  lastName: 'Cando',
  location: 'London',
  contract: true,
  numberOfReports: 17,
};


interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const fullName = `${firstLetter}. ${lastName}`;
  return fullName;
};

const result = printTeacher('Willis', 'Wright');

console.log(result);


interface StudentInterface {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const studentInstance = new StudentClass('Mercy', 'Lee');
console.log(studentInstance.workOnHomework());
console.log(studentInstance.displayName());
