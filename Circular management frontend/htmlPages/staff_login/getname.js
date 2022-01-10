const nam = localStorage.getItem('name');
const ele=document.getElementById("display_con");


     const para = document.createElement("h3");
     const node = document.createTextNode(nam.toUpperCase());
     para.appendChild(node);
    
     ele.appendChild(para);
