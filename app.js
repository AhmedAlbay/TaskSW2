import express from "express";
const app =express();
const students =[
    {
        id :1 ,
        name :'Ahmed',
        age : 21,
        depart :"CS" 
    },
    {
        id :2 ,
        name :"Mohamed",
        age : 21,
        depart :"IT"
    },
    {
        id :3 ,
        name :"Ali",
        age : 21,
        depart:"IS"
    }

]
const datastudent =(reg ,res)=>{
    let output ="<ui style=font-size:3em;>" 
for(let i=0 ;i<students.length;i++){
    const student = students[i]
     output+="<li>" + student.name +"</li>"
}     
    output+="</ui>"
    res.send(output)

}
app.get('/student' ,datastudent)
app.listen(5000)