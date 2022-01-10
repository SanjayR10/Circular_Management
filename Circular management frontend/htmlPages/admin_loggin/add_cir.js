let summit=document.getElementById("submit");

summit.addEventListener('click',(e)=>{
    e.preventDefault();
    let subject=document.getElementById("subject").value;
    let content=document.getElementById("content").value;

    let circular={
        subject:subject,
        content:content
    }
    result=addCircular(circular);
})

 async function addCircular(circular){
    let response = await fetch('http://localhost:8080/addcircular',{method: 'POST', body: JSON.stringify(circular), headers:{'Accept': 'application/json','Content-Type': 'application/json'}});
    let data = await response.json();
    if(data.subject===circular.subject)
    {
        document.getElementById("add_cir").reset();
        alert("Circular posted Successfully");
    }
  
    else
    {
        alert("Circular not posted, Please try again!");
    }
}