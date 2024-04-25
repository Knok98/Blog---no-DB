import express from "express";
import bodyParser from "body-parser";
import { render } from "ejs";

const app = express();
const port = 3000;
app.use(express.static("public"))

let posts=[];
let add=false;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.render("index.ejs",{posts: posts})
})
app.get("/create",(req,res)=>{
    res.render("index.ejs",{add: true,posts: posts})
})
app.post("/submit",(req,res)=>{
    createPost(req,res);
    res.render("index.ejs",{posts: posts,add: false})
})
app.post("/delete",(req,res)=>{
    deletePost(req,res);
    res.render("index.ejs",{posts: posts,add: false})
})







app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });


function createPost(req,res){
    const post={name: req.body["name"],article: req.body["article"],timeStamp: new Date()}
    posts.push(post);
};
function deletePost(req,res){
    console.log(req.body["id"])
    posts.splice(req.body["id"],1)
};