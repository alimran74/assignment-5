


const btnList=document.getElementsByClassName('com-btn')
const assignedTask=document.getElementById('assigned-task')
const completedTask=document.getElementById('completed-task')
 assignedTask.innerText=btnList.length

for (const element of btnList) {
    element.addEventListener('click',(event)=>{
        alert('Board updated Successfully')

        if (btnList.length===1) {
            alert('Congrats!!! You have completed all the current task')
        }
        event.target.classList.remove('com-btn')
        assignedTask.innerText=btnList.length
        event.target.setAttribute('disabled','')
       completedTask.innerText = parseInt(completedTask.innerText)+1
    })
}

 