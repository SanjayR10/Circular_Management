getCircular();
async function getCircular() 
{

    let response = await fetch('http://localhost:8080/getcircular',{method: 'GET', headers:{'Content-Type': 'application/json'}});
    let data = await response.json();
        // let c=0;
        data.reverse();
    const html=data.map((det)=>{
        
        return `<h4>Subject : ${det.subject.toUpperCase()}</h4> <p>Content : ${det.content}<p><hr>`;
    
    })

    document.getElementById("cir_content").insertAdjacentHTML("afterbegin",html);
}


