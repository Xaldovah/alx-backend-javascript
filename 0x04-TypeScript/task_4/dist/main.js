export var cpp = new Subjects.Cpp();
export var java = new Subjects.Java();
export var react = new Subjects.React();
export var cTeacher = {
    firstName: 'Michael',
    lastName: 'Wright',
    experienceTeachingC: 10,
};
console.log('C++');
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
console.log('Java');
java.setTeacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
console.log('React');
react.setTeacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
//# sourceMappingURL=main.js.map