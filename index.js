//import express module
const express=require('express')
const app=express()

app.use(express.json())

let users=[
    
   { id:1, name:"alice", email:"xyz@gmail.com"},
    {id:2, name:"rose", email:"abc@gmail.com"}
]
// get all users
app.get('/users',(reg,res)=>{
    res.join(users)
})
app.post('/users',(reg,res)=>{
    const newuser={id:users.length+1, ...reg.body}
    users.push(newuser)

})
//update--PUT()
app.put('/users/:id',(reg,res)=>{
    const user=users.find(u=>u.id===parseInt(reg.params.id))
    if(!user) return res.status(404).json({message:"user not found"})
        user.name=reg.body.name || reg.name
    user.email=reg.body.email || reg.email
    reg.join(user)


    })
    //DELETE --PUt()
    app.delete('/users/:id',(reg,res)=>{
        users=users.filter(user=>user.id !==parseInt(reg,params.id))
        res.join({message:'User Deleted'})
    })
    //start the
    app.listen(8000,()=>console.log('server is running in port 8000'))




    


























