import { Subject } from './subjects/Teacher';


export const cpp = new Subject.Cpp();
export const java = new Subject.Java();
export const react = new Subject.React();

export const cTeacher: Subject.Teacher = {
  firstName: 'Michael',
  lastName: 'Wright',
  experienceTeachingC: 10,
};

console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());


console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());


console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
