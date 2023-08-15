document.querySelector('#add-button').onclick = function(){
    document.getElementById('task-list').style.visibility = 'visible';
    if(document.querySelector('#task-input').value.length == 0){
        alert("Please Enter a Task");
    }
    else{
        document.querySelector('#task-list').innerHTML += `
            <div class="task">
                <span>
                    ${document.querySelector('#task-input').value}
                </span>
                <div class='task-buttons'>
                    <button id="complete" class="complete">✔
                    </button>
                    <button class="delete">🗑
                    </button>
                </div>
            </div>
        `;
        const alltasks = document.querySelector('#task-list');
        
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.parentNode.remove();

                if (!document.querySelector('.task')) {
                    alltasks.style.visibility = "hidden";
                }
            }
        }
        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }
        document.querySelector("#task-input").value = ""; 
    }
}
