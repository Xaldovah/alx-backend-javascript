export default function createIteratorObject(report) {
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;
  const departments = Object.keys(report.allEmployees);

  const iterator = {
    next() {
      if (currentDepartmentIndex < departments.length) {
        const currentDepartment = departments[currentDepartmentIndex];
        const currentEmployees = report.allEmployees[currentDepartment];

        if (currentEmployeeIndex < currentEmployees.length) {
          const result = {
            value: currentEmployees[currentEmployeeIndex],
            done: false,
          };

          currentEmployeeIndex++;

          return result;
        } else {
          // Move to the next department
          currentDepartmentIndex++;
          currentEmployeeIndex = 0;
          return this.next();
        }
      } else {
        // All departments have been iterated
        return { value: undefined, done: true };
      }
    },
  };

  // Make the object iterable
  iterator[Symbol.iterator] = function () {
    return this;
  };

  return iterator;
}
