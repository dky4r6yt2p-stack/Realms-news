document.addEventListener("DOMContentLoaded",()=>{
 const form=document.getElementById("storyForm"),status=document.getElementById("status"),clear=document.getElementById("clear");
 if(!form)return;
 form.addEventListener("submit",e=>{
  e.preventDefault();
  const story={
   title:document.getElementById("title").value.trim(),
   category:document.getElementById("category").value,
   author:document.getElementById("author").value.trim(),
   body:document.getElementById("body").value.trim(),
   image:document.getElementById("image").value.trim(),
   video:document.getElementById("video").value.trim()
  };
  const stories=getStories(); stories.unshift(story); saveStories(stories);
  form.reset(); status.textContent="Story published on this browser. Open the homepage to see it.";
 });
 clear.onclick=()=>{form.reset();status.textContent=""};
});