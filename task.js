document.getElementById('add-form').addEventListener('submit', addTask)
function addTask(event){
    let taskName = document.getElementById('add-task-name').value 
    let taskDesc = document.getElementById('add-task-desc').value

    const task = document.createElement('div')
    task.className = 'container p-2 my-2 bg-white text-black'

    const head = document.createElement('h2')
    const headText  = document.createTextNode(taskName)
    head.appendChild(headText)
    task.appendChild(head)

    const para = document.createElement('p')
    const paraText = document.createTextNode(taskDesc)
    para.appendChild(paraText)
    task.appendChild(para)

    const completebtn = document.createElement('button')
    const completeText = document.createTextNode('Complete Task')
    completebtn.className = 'btn btn-success'
    completebtn.type = 'button'
    completebtn.name = 'btn-complete'
    completebtn.onclick = function(){
        let parent = this.parentElement
        parent.lastChild.remove()
        this.className = 'btn btn-primary disabled'
        this.firstChild.remove();
        let doneText = document.createTextNode('Completed')
        this.appendChild(doneText)
        parent.className = "container p-2 my-2 bg-white text-black"
    }
    completebtn.appendChild(completeText)
    task.appendChild(completebtn)

    const deletebtn = document.createElement('button')
    const deleteText = document.createTextNode('Delete Task')
    deletebtn.className = 'btn btn-danger'
    deletebtn.type = 'button'
    deletebtn.name = 'btn-delete'
    deletebtn.onclick = function(){
        let parent = this.parentElement;
        parent.remove()
    }
    deletebtn.appendChild(deleteText)
    task.appendChild(deletebtn)

    parent = document.getElementById('task-list')
    parent.appendChild(task)
    event.preventDefault()

}
