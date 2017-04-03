// for (var i = 100; i >= 0; i -= 2) {
//     document.write(i + '<br>');
// }

// var j = 100;
// while (j >= 0) {
//     document.write(j + '<br>');
//     j -= 2;
// }

function prn(msg) {
    document.write(msg);
    document.write('<br>');
}

// var studentNames = ['James', 'John'];
// print(studentNames.length);
// print(studentNames[0]);
// print(studentNames[1]);
// print(studentNames[2]);

// studentNames[20] = 'Deere';
// print(studentNames[2]);

// studentNames.push('Neo');
// print(studentNames[3]);

// for (var i = 0; i < studentNames.length; i++) {
//     print(studentNames[i]);
// }

// print('');
// studentNames.forEach(function (el) {
//     print(el);
// });

// var students = {};

// students['John'] = 20;
// students['Neo'] = 22;
// students['James'] = 18;

// prn(students.length);

// for (var student in students) {
//     prn(student + ': ' + students[student]);
// }

function sayName () {
    prn('My name is ' + this.name + ', my age is ' + this.age);
}

var john = {};
john.name = 'John';
john.age = 20;
john.say = function () {
    prn('My name is ' + this.name + ', my age is ' + this.age);
};

var james = {
    name: 'James',
    age: 18,
    say: sayName
}

prn(john.name + ': ' + john.age);
john.say();
james.say();

function Student(name, age) {
    this.name = name;
    this.age = age;
    this.say = sayName;
    return this;
}

var alice = new Student('Alice', 19);
alice.say();

