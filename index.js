const express = require("express")
const users = require("./MOCK_DATA.json")

const app = express()
const PORT = 5000

//Routes

//Rest Api
app.get("/api/users", (req,res) =>{
    return res.json(users);
});


app.get("/users", (req,res) =>{
    const HTML = `
    <ol>
    ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
    `;
    res.send(HTML);
});

app.get("/api/users/:id", (req,res) =>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id===id);
    return res.json(user);
});

app.post("/api/users",(req,res) =>{
    // Creating a new user
    return res.json({status:"pending"});
});

app.patch("/api/users/:id", (req,res) =>{
    // edit the user using id
    return res.json({status:"pending"});
});

app.delete("/api/users/:id", (req,res) =>{
    // delete the user using id
    return res.json({status:"pending"});
});

// another method to merge the same route in one
// app.route("/api/users/:id")
// .get((req,res) =>{
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id===id);
//     return res.json(user);
// })
// .patch((req,res) =>{
//     // edit the user using id
//     return res.json({status:"pending"});
// })
// .delete((req,res) =>{
//     // delete the user using id
//     return res.json({status:"pending"});
// });


app.listen(PORT,() => console.log(`Server started at ${PORT}`));
