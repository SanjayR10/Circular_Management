
const register=document.getElementById("register");



register.addEventListener('click',(e)=>{
    e.preventDefault(); 
    let password = document.getElementById("password").value;
    let conpassword = document.getElementById("conpassword").value;
    if(password.length<6){
        const element = document.getElementById("container");
        removeAllChildNodes(element);
    const para = document.createElement("h3");
    const node = document.createTextNode("The password length should be greater than or equal to 6. Try again !");
    para.appendChild(node);

    element.appendChild(para);
   }
   else if(password!=conpassword){
       const element = document.getElementById("container");
       removeAllChildNodes(element);
    const para = document.createElement("h3");
    const node = document.createTextNode("The password doesn't match each other. Try again !");
    para.appendChild(node);

    element.appendChild(para);
   }
   else{

    let firstname=document.getElementById("firstname").value;
    let lastname=document.getElementById("lastname").value;
    let email=document.getElementById("email").value;
    password=document.getElementById("password").value;
    let isadmin=false;

    let user ={
        email:email,
        firstname:firstname,
        isadmin:isadmin,
        lastname:lastname,
        password:password
    }
 
     result = addUser(user);
//     const element = document.getElementById("container");
//     removeAllChildNodes(element);
//  const para = document.createElement("h3");
//  const node = document.createTextNode("You have been added to our database. Welcome board !");
//  para.appendChild(node);

//  element.appendChild(para);

    // setTimeout(()=>{ location.href = "../index.html"; },
    //  4000);
   }

})


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


async function addUser(user) 
{
    let response = await fetch('http://localhost:8080/adduser',{method: 'POST', body: JSON.stringify(user), headers:{'Accept': 'application/json','Content-Type': 'application/json'}});
    let data = await response.json();
    if(data.firstname===user.firstname)
    {
        document.getElementById("newForm").reset();
        const element = document.getElementById("container");
        removeAllChildNodes(element);
     const para = document.createElement("h3");
     const node = document.createTextNode("You have been added to our database. Welcome board !");
     para.appendChild(node);
    
     element.appendChild(para);

    }
    else{
        const element = document.getElementById("container");
        removeAllChildNodes(element);
     const para = document.createElement("h3");
     const node = document.createTextNode("Failed to add you in database please try again !");
     para.appendChild(node);
    
     element.appendChild(para);
    }
}
            
