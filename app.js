const seedStories = [
  {title:"Welcome to Realms News",category:"School",author:"Realms News Staff",body:"This is the first version of the Realms student newsroom. New stories published from the Editor page will appear on the homepage.",image:"",video:""},
  {title:"What’s happening around campus?",category:"Student Life",author:"Student Reporter",body:"Use this space for interviews, announcements, student features and the stories that matter to the Realms community.",image:"",video:""},
  {title:"Your next story starts here",category:"Community",author:"Realms News Staff",body:"Realms News is designed for student journalism: report the facts, tell a good story and give your community something worth reading.",image:"",video:""}
];
function getStories(){try{return JSON.parse(localStorage.getItem("realmsStories"))||seedStories}catch(e){return seedStories}}
function saveStories(s){localStorage.setItem("realmsStories",JSON.stringify(s))}
function renderStories(){
 const grid=document.getElementById("storyGrid"); if(!grid)return;
 const stories=getStories();
 grid.innerHTML=stories.map((s,i)=>`<article class="story-card">
 <div class="story-image">${s.image?`<img src="${escapeHtml(s.image)}" alt="" style="width:100%;height:100%;object-fit:cover">`:"📰"}</div>
 <div class="story-content"><span class="tag">${escapeHtml(s.category)}</span>
 <h3>${escapeHtml(s.title)}</h3><p>${escapeHtml(s.body).slice(0,150)}${s.body.length>150?"…":""}</p>
 <small>By ${escapeHtml(s.author)}</small></div></article>`).join("");
}
function escapeHtml(x){return String(x).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}
document.addEventListener("DOMContentLoaded",()=>{
 renderStories();
 const t=document.getElementById("today"),y=document.getElementById("year");
 if(t)t.textContent=new Date().toLocaleDateString(undefined,{month:"long",day:"numeric",year:"numeric"});
 if(y)y.textContent=new Date().getFullYear();
 const b=document.getElementById("menuButton"),n=document.getElementById("nav");
 if(b)b.onclick=()=>{n.classList.toggle("open");b.setAttribute("aria-expanded",n.classList.contains("open"))};
});