const express=require('express');
const _=require('lodash');

const app=express();

const port = process.env.PORT || 3000;

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));

let posts=[{title:"Day 1",content:"Day 1 was good."}];

app.get("/",(req,res)=>
{
	res.render('home',{hactive:"active",aactive:"",cactive:""});
});

app.get("/post",(req,res)=>
{
		res.render('post',{allposts:posts,hactive:"",aactive:"active",cactive:""});
});

app.get("/compose",(req,res)=>
{
	res.render('compose',{hactive:"",aactive:"",cactive:"active"});
});


app.get("/post/del/:postTitle",(req,res)=>
{
	let postTitle=_.lowerCase(req.params.postTitle);
	let flag=1;
	let index=0;
	posts.forEach((p)=>
	{	
		if(postTitle===_.lowerCase(p.title))
		{
			posts.splice(index,1);			
			res.redirect("/post");
		}
		index++;
	})

	if(flag)
	{
		res.redirect("/post",{hactive:"",aactive:"active",cactive:""});
	}

});


app.get("/post/:postName",(req,res)=>
{
	const requestedTitle=_.lowerCase(req.params.postName);
	
	let flag=1;

	posts.forEach((post)=>
	{
		const pt=_.lowerCase(post.title);

		if(pt===requestedTitle){
			res.render("postPage",{title:post.title,content:post.content,hactive:"",aactive:"",cactive:""});
			flag=0;
		}
	})

	if(flag)
		res.redirect("/");

});

app.post("/post",(req,res)=>
{
	let post={
		title:req.body.postTitle,
		content:req.body.postContent
	}

	posts.push(post);

	res.redirect('/post');
});


app.listen(port);