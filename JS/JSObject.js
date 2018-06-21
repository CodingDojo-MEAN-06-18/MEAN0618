// Challenge #1 Write a function that accepts an array of student objects, as shown below. Print all of the students' names and their cohorts.
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];


function print_all(arr) {
    for (const person of students) {
        console.log(`Name: ${ person.name }, Cohort: ${ person.cohort }`)
    };
};
print_all(students);

function print_alt (person) {
    console.log('Name: ' + person.name + ', Cohort: ' + person.cohort)
};

students.forEach(print_alt);



// Challenge #2 Write a function that accepts an object of users divided into employees and managers, as shown below, and logs the information to the console.
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 function employees_managers(obj){
    for (let key in obj) {
        console.log(key.toUpperCase());
        for (let i = 0; i < obj[key].length; i++) {
            let place = i + 1;
            let fname = obj[key][i].first_name;
            let lname = obj[key][i].last_name;
            let tlength = fname.length + lname.length;
            console.log(`${place} - ${lname}, ${fname} - ${tlength}`);
        }
    };
}

employees_managers(users);