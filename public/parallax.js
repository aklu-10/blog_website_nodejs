hero=document.querySelector(".hero");
window.onscroll=()=>
{
	hero.style.transform=`translateY(${window.scrollY}px)`;
}
