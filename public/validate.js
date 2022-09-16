function validate()
{	

	let postTitle=document.querySelector("#title");
	let postContent=document.querySelector("#content");


	if(postTitle.value==='')
	{
		document.querySelector("#titleError").innerText="please give a title";
		return false
	}
	else
	{
		document.querySelector("#titleError").innerText="";

	}


	if(postContent.value==='')
	{
		document.querySelector("#contentError").innerText="please write something";
		return false
	}
	else
	{
		document.querySelector("#contentError").innerText="";

	}
}

