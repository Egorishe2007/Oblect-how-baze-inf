// Создание и инициализация объекта "EmployeeDB"
const EmployeeDB = {
    employees: [], // Массив для хранения данных о сотрудниках

    // Метод для добавления сотрудника в базу данных
    addEmployee: function(employee) {
        this.employees.push(employee);
    },

    // Метод для удаления сотрудника из базы данных
    removeEmployee: function(employeeName) {
        this.employees = this.employees.filter(employee => employee.name !== employeeName);
    },

    // Метод для обновления информации о сотруднике
    updateEmployee: function(employeeName, newEmployeeData) {
        this.employees = this.employees.map(employee => {
            if (employee.name === employeeName) {
                return { ...employee, ...newEmployeeData };
            }
            return employee;
        });
    },

    // Метод для чтения данных о всех сотрудниках
    readEmployees: function() {
        this.employees.forEach(employee => {
            console.log(`Name: ${employee.name}, Position: ${employee.position}, Department: ${employee.department}`);
        });
    }
};
// Добавление сотрудников в базу данных
EmployeeDB.addEmployee({ name: 'John', position: 'Manager', department: 'Sales' });
EmployeeDB.addEmployee({ name: 'Alice', position: 'Developer', department: 'IT' });
EmployeeDB.addEmployee({ name: 'Emily', position: 'Designer', department: 'Marketing' });
// Вывод данных о сотрудниках в консоль
EmployeeDB.readEmployees();

// Добавление методов для модификации данных о сотрудниках
const modifyEmployees = {
    // Метод для капитализации имён сотрудников
    capitalizeNames: function() {
        EmployeeDB.employees = EmployeeDB.employees.map(employee => ({
            ...employee,
            name: employee.name.charAt(0).toUpperCase() + employee.name.slice(1)
        }));
    },

    // Метод для приведения названий отделов к нижнему регистру
    lowercaseDepartments: function() {
        EmployeeDB.employees = EmployeeDB.employees.map(employee => ({
            ...employee,
            department: employee.department.toLowerCase()
        }));
    }
};

// Капитализация имен сотрудников
modifyEmployees.capitalizeNames();

// Приведение названий отделов к нижнему регистру
modifyEmployees.lowercaseDepartments();

// Метод для удаления сотрудника из базы данных
EmployeeDB.removeEmployee = function(employeeName) {
    this.employees = this.employees.filter(employee => employee.name !== employeeName);
};

// Метод для обновления информации о сотруднике
EmployeeDB.updateEmployee = function(employeeName, newEmployeeData) {
    this.employees = this.employees.map(employee => {
        if (employee.name === employeeName) {
            return { ...employee, ...newEmployeeData };
        }
        return employee;
    });
};

// Функция для клонирования объекта EmployeeDB
function cloneEmployeeDB(employeeDB) {
    return { ...employeeDB };
}

// Функция для слияния двух баз данных сотрудников
function mergeEmployeeDBs(employeeDB1, employeeDB2) {
    return {
        employees: [...employeeDB1.employees, ...employeeDB2.employees]
    };
}


// Клонирование объекта EmployeeDB
const clonedEmployeeDB = cloneEmployeeDB(EmployeeDB);

// Слияние двух баз данных сотрудников
const mergedEmployeeDB = mergeEmployeeDBs(EmployeeDB1, EmployeeDB2);

// Функция для вывода всех уникальных отделов
function printUniqueDepartments(employeeDB) {
    const departments = {};
    employeeDB.employees.forEach(employee => {
        departments[employee.department] = true;
    });
    console.log(Object.keys(departments));
}


// Вывод всех уникальных отделов
printUniqueDepartments(EmployeeDB);

// Функция для сравнения объектов сотрудников по заданным полям
function compareEmployees(employee1, employee2, fields) {
    for (const field of fields) {
        if (employee1[field] !== employee2[field]) {
            return false;
        }
    }
    return true;
}

// Пример использования:

const employee1 = { name: 'John', department: 'IT' };
const employee2 = { name: 'John', department: 'HR' };

const areEqual = compareEmployees(employee1, employee2, ['name', 'department']);
console.log(areEqual); // Output: false

//Обсуждение:
//При сравнении объектов напрямую как примитивы (используя операторы сравнения, такие как === или !==),
//мы сравниваем ссылки на объекты, а не их содержимое. Даже если два объекта содержат одинаковые поля и значения, они будут считаться разными,
//если они находятся в разных местах в памяти.

//Поэтому для корректного сравнения объектов по их содержимому нам нужно явно определить, какие поля считать совпадающими, 
//и сравнивать их значения.