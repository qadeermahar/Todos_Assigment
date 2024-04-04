import inquirer from "inquirer";

let arr = []
let condition = true

while ( condition) 
    



{let Q1  = await inquirer.prompt([{

 name : "question1",
 type : "string",
 message: "what you want to add"
 

},
{

name : "question2",
type:"confirm" ,
message:"would you add more"




}])

arr.push(Q1.question1)
condition = Q1.question2
console.log(arr)}