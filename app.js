const cardForm = document.querySelector('.add-task-btn button');
const clearBtn = document.querySelector('.clear-btn');
const taskItems = document.querySelector('ul.list-group');
const filter = document.querySelector('#filter')

// Add Task
cardForm.addEventListener('click', addTask);

function addTask() {
    const newTask = document.querySelector('#newTask');
    
    if(newTask.value !== ''){
        // Add Tasks
        addTasks(newTask.value);

        if(document.querySelector('.alert') < 1) {
             // Alert
         createAlert('alert alert-success', 'Task Added!');
         // timeout
         timeOut('alert', 2000);
        }
    
        // Clear Input Field
        clearFields();

    }else{
        // Alert
        if(document.querySelector('.alert') < 1) {
            createAlert('alert alert-danger', 'Please Add Task!');
            timeOut('alert', 2000);
        }
    }
}

// Clear All Task
clearBtn.addEventListener('click', clear);

function clear(e) {
    const listItems = document.querySelectorAll('li');
    listItems.forEach(function(listItem) {
            listItem.remove();

              // Alert
            if(document.querySelector('.alert') < 1) {
            createAlert('alert alert-info', 'Task Cleared');
            timeOut('alert', 2000);
            }  
    })

    e.preventDefault();
}

// Delete Task
taskItems.addEventListener('click', deleteItem);

function deleteItem(e) {
    // console.log(e.target.parentElement)
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('DO YOU WANT TO DELETE THIS TASK?')){
            e.target.parentElement.parentElement.remove();
            if(document.querySelector('.alert') < 1) {
                 // Alert
            createAlert('alert alert-danger', 'Task Deleted!');
            // timeout
       timeOut('alert', 2000);
            }
           
        }
    }
}



// Date

document.addEventListener('DOMContentLoaded', function() {
    dates();
})



// Add task
function addTasks(task) {
    // Create element
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.innerHTML = `
    <span>${task}</span>
    <span class="text-danger delete-item">
      <i class="far fa-trash-alt"></i>
    </span>
    `
      // Insert in ul
      const ul = document.querySelector('ul.list-group');
      ul.appendChild(li);    
}

// // Filter Task
// filter.addEventListener('keyup', filterTasks);

// function filterTasks(e){
//     const text = e.target.value.toLowerCase();

//     document.querySelectorAll('.list-group-item').forEach(function(task) {
//         const item = task.firstElementChild.textContent;
//         console.log(item)
//         if(item.toLowerCase().indexOf(text) != -1) {
//             task.style.display = 'block';
//         }else{
//             task.style.display = 'none';
//         }
//     });

//     e.preventDefault();
// }





// Create Alert
function createAlert(className, message) {
    const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
    
        const cardBody = document.querySelector('.card-body');
        const cardTitle = document.querySelector('.task-div');
        cardBody.insertBefore(div, cardTitle);

      
}

// setTimeOut
function timeOut(alerts, time) {
    setTimeout(function() {
            document.querySelector(`.${alerts}`).remove(); 
    },time)
}


// Clear Input Fileds
function clearFields() {
    const newTask = document.querySelector('#newTask');
    newTask.value = ''
};


// Date
function dates() {
    const year = new Date().getFullYear();
    const month = new Date().getMonth()
    if(month === 0) {
        document.querySelector('.insert-date').innerHTML = `Jan ${year}`;
    }else if(month === 1) {
        document.querySelector('.insert-date').innerHTML = `Feb ${year}`
    }else if(month === 2) {
        document.querySelector('.insert-date').innerHTML = `Mar ${year}`
    }else if(month === 3) {
        document.querySelector('.insert-date').innerHTML = `Apr ${year}`
    }else if(month === 4) {
        document.querySelector('.insert-date').innerHTML = `May ${year}`
    }else if(month === 5) {
        document.querySelector('.insert-date').innerHTML = `Jun ${year}`
    }else if(month === 6) {
        document.querySelector('.insert-date').innerHTML = `Jul ${year}`
    }else if(month === 7) {
        document.querySelector('.insert-date').innerHTML = `Aug ${year}`
    }else if(month === 8) {
        document.querySelector('.insert-date').innerHTML = `Sep ${year}`
    }else if(month === 9) {
        document.querySelector('.insert-date').innerHTML = `Oct ${year}`
    }else if(month === 10) {
        document.querySelector('.insert-date').innerHTML = `Nov ${year}`
    }else if(month === 11) {
        document.querySelector('.insert-date').innerHTML = `Dec ${year}`
    }
}



