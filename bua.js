function updateClock(){

    const now = new Date();

    const time = now.toLocaleTimeString();

    document.getElementById("clock").innerHTML = "🕒 " + time;

}

setInterval(updateClock,1000);

updateClock();

/* NOTES SAVE */

const notes = document.getElementById("notes");

notes.value = localStorage.getItem("notes") || "";

notes.addEventListener("keyup",()=>{

    localStorage.setItem("notes",notes.value);

});

/* TODO LIST */

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks(){

    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach((task,index)=>{

        taskList.innerHTML += `
        
        <li>
            ${task}
            <button onclick="deleteTask(${index})">X</button>
        </li>

        `;

    });

    document.getElementById("taskCount").innerText = tasks.length;

    localStorage.setItem("tasks",JSON.stringify(tasks));

}

function addTask(){

    const input = document.getElementById("taskInput");

    if(input.value.trim() !== ""){

        tasks.push(input.value);

        input.value = "";

        renderTasks();

    }

}

function deleteTask(index){

    tasks.splice(index,1);

    renderTasks();

}

renderTasks();

/* CHART */

new Chart(document.getElementById("chart"),{

    type:"line",

    data:{

        labels:["Sat","Sun","Mon","Tue","Wed","Thu"],

        datasets:[{

            label:"Study Hours",

            data:[2,4,3,5,6,4],

            borderColor:"#a78bfa",

            backgroundColor:"rgba(167,139,250,0.2)",

            fill:true,

            tension:0.4

        }]

    }

});

