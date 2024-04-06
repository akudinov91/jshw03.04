// //Задача 3

// class Employee {
//   constructor(name, position, salary) {
//     this.name = name;
//     this.position = position;
//     this.salary = salary;
//   }
// }

// class EmpTable {
//   constructor(employees) {
//     this.employees = employees;
//   }

//   getHtml() {
//     let html = "<table border='1'>";
//     html += "<tr><th>Name</th><th>Position</th><th>Salary</th></tr>";
//     this.employees.forEach((employee) => {
//       html += `<tr><td>${employee.name}</td><td>${employee.position}</td><td>${employee.salary}</td></tr>`;
//     });
//     html += "</table>";
//     return html;
//   }
// }

// const bankEmployees = [
//   new Employee("Andrew Kudinov", "Manager", 1300),
//   new Employee("Gurban Mamedov", "Assistant Manager", 1250),
//   new Employee("Ian kulik", "Teller", 1000),
// ];

// const empTable = new EmpTable(bankEmployees);

// document.write(empTable.getHtml());

//Задача 4

class EmpTable {
  constructor(employees) {
    this.employees = employees;
  }

  getHtml() {
    let html = "<table>";
    html += "<tr><th>Name</th><th>Position</th></tr>";
    this.employees.forEach((employee) => {
      html += `<tr><td>${employee.name}</td><td>${employee.position}</td></tr>`;
    });
    html += "</table>";
    return html;
  }
}

class StyledEmpTable extends EmpTable {
  constructor(employees, styles) {
    super(employees);
    this.styles = styles;
  }

  getStyles() {
    let stylesString = "<style>";
    for (const [property, value] of Object.entries(this.styles)) {
      stylesString += `table { ${property}: ${value}; }`;
    }
    stylesString += "</style>";
    return stylesString;
  }

  getHtml() {
    return this.getStyles() + super.getHtml();
  }
}

const employees = [
  { name: "John Doe", position: "Manager" },
  { name: "Jane Smith", position: "Developer" },
  { name: "Alice Johnson", position: "Designer" },
];

// Пример стилей для таблицы
const styles = {
  "background-color": "lightgray",
  "border-collapse": "collapse",
  width: "100%",
};

const styledTable = new StyledEmpTable(employees, styles);
document.body.innerHTML = styledTable.getHtml();
