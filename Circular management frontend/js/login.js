

let button=document.getElementById("log_submit");

button.addEventListener('click',(e)=>{
e.preventDefault();
let email=document.getElementById("log_email").value;
let password=document.getElementById("log_password").value;
 getUser();
});


async function getUser() 
{

    let bool=false;
    let email=document.getElementById("log_email").value;
    let password=document.getElementById("log_password").value;

    let response = await fetch('http://localhost:8080/getuser',{method: 'GET', headers:{'Content-Type': 'application/json'}});
    let data = await response.json();
    console.log(data);
    const result = data.filter(res => res.email ===email);
    if(result.length>=1){
        bool=result[0].password===password?true:false;
        if(bool){
          if(result[0].isadmin)
          {
              setTimeout(()=>{ location.href = "../htmlPages/admin_loggin/login_admin.html"; },
     800);
          }
          else{
              const nam=result[0].firstname+" "+result[0].lastname;
            localStorage.setItem('name', nam);
            setTimeout(()=>{ location.href = "../htmlPages/staff_login/login_user.html"; },
            800);
          }
        }
        else{
            alert("Invalid credentials"); 
        }
    }
    else{
        alert("Invalid credentials");
    }
}



   