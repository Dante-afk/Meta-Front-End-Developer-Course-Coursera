// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
        this.energy = this.energy + 10;
    }
    doSomethingFun() {
        this.energy = this.energy - 10;
    }
}

// Task 2: Code a Worker class
class Worker extends Person {
    constructor(name = "Tom", age = 20, energy = 100, xp = 0, hourlyWage = 10) {
        super(name, age, energy)
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    sleep() {
        super.sleep;
    }
    doSomethingFun() {
        super.doSomethingFun;
    }
    goToWork() {
        this.xp += 10;
    }
}
// Task 3: Code an intern object, run methods
function intern() {
    let intern = new Worker();
    intern.name = "Bob";
    intern.age = 120;
    intern.energy = 110;
    intern.xp = 0;
    intern.hourlyWage = 10;
    intern.goToWork()
    return (intern);
}

// Task 4: Code a manager object, methods
function manager() {
    let manager = new Worker()
    manager.name = "Alice"
    manager.age = 30
    manager.energy = 120;
    manager.xp = 100;
    manager.hourlyWage = 30;
    manager.doSomethingFun()
    return (manager);
    
}
console.log(intern());
console.log(manager())
