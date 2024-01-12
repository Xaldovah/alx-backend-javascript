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


console.log(teacher1);
console.log(teacher2);
console.log(teacher3);
console.log(director1);
