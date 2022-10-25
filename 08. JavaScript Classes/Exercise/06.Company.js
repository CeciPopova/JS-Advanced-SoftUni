class Company{
    constructor(){
       this.departments = {};
    }
    addEmployee(name, salary, ocupation, department){
        let args = [name,salary,ocupation,department];
        const invalidInput = (input) => input === " " || input === undefined || input === null || input === '';
        if (args.some(invalidInput)) {
            throw new Error('Invalid input!');
        }
        if (salary < 0) {
            throw new Error("Invalid input!");
        }
        let employee = {name, salary, ocupation};
       
       if(!this.departments.hasOwnProperty(department)){
        this.departments[department] = [];
       }
        this.departments[department].push(employee);
        return `New employee is hired. Name: ${name}. Position: ${ocupation}`;
      
    }
    bestDepartment(){
        let maxAverage = 0;
        let average = 0
        let bestDepartment = '';
        for (const [department,employees] of Object.entries(this.departments)) {
            let sum = 0;
            let count = 0;
            for (const employee of employees) {
                sum += Number(employee.salary);
                count++;
            }
            average = sum / count;
            if (average > maxAverage) {
                maxAverage = average;
                bestDepartment = department;
            }
        }
        let sortedEmployees = this.departments[bestDepartment]
        .sort((a, b) => { return b.salary - a.salary == 0 ? a.name.localeCompare(b.name) : b.salary - a.salary })
        .map(x => `${x.name} ${x.salary} ${x.ocupation}`)
        .join('\n');

    return `Best Department is: ${bestDepartment}\nAverage salary: ${maxAverage.toFixed(2)}\n${sortedEmployees}`;
    }
}

let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
 console.log(c.bestDepartment());

