// For Each Loop in JavaScript
// Do not return any value

const programmingLanguages = ["JavaScript", "Python", "C++", "Ruby"];

programmingLanguages.forEach(function (language) {
    console.log(language);
});

const students = [
    {name: "John", college: "MIT", course: "Computer Science"},
    {name: "Peter", college: "Harvard", course: "Data Science"},
    {name: "Kate", college: "Stanford", course: "Web Development"},
    {name: "Mike", college: "Oxford", course: "Computer Science"}
];

students.forEach((student) => {
    console.log(`${student.name} studies ${student.course} at ${student.college}`);
})