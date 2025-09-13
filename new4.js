console.log("===Hour 1: JSON Basics===");

let student = {
    name: "pranii",
    age: 20,
    marks: [80, 90, 78]
};

// convert object -> JSON string
let jsonString = JSON.stringify(student);
console.log("JSON String:", jsonString);

// convert JSON string -> object
let parsedObj = JSON.parse(jsonString);
console.log("Parsed Object:", parsedObj);


console.log(" === Hour 2 : AJAX with fetch === ");

fetch("https://jsonplaceholder.typicode.com/posts/1")
 .then(response => response.json())
 .then(data => console.log("Fetched Data:,data"))
 .catch(error => console.error("Error:",error))
 let Books = [
    {
        title: "Book One",
        author: "Author A",
        year: 2001
    },
    {
        title: "Book two",
        author: "Author b",
        year: 2002
    }
];
console.log(Books);

console.log("===Hour 2: AJAX with Fetch===");
//fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log("Fetched Data:",data))
  .catch(error => console.error("Error:",error));
//fetch("https://jsonplaceholder.typicode.com/posts/")
  .then(response => response.json())
  .then(data => console.log("Fetched Data:",data))
  .catch(error => console.error("Error:",error))

//fetch("https://jsonplaceholder.typicode.com/users/")
   .then(res => res.json())
   .then(users => {
     let ouput = "<h3>user list</h3><ul>";
     users.forEach(user => {
         ouput += `<li>${user.name}-${user.email}</li>`;
     });