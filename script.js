const inputbox = document.getElementById("texting");
const numberoftask = document.getElementById("numoftask");


function addTask(){
    if (inputbox === ""){
        alert("you nedd to write...");
    }else{
        let li = document.createElement("Li");
        li.innerHTML = inputbox.value;
        numberoftask.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML =  "\u00d7";
        li.appendChild(span);
    }
     inputbox.value = "";
     savedata();
}


numberoftask.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata()
    }
}, false);


function savedata(){
    localStorage.setItem("data" ,numberoftask.innerHTML );
}

function showtask(){
    numberoftask.innerHTML = localStorage.getItem("data");
}

showtask();