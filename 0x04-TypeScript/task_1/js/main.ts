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
