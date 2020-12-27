//User Interface Variables
const form = document.querySelector('form');
const input= document.querySelector('#txtTaskName');
const btnDeleteAll=document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');

//Call back event  listeners
eventListeners();

function eventListeners(){
    //save submit events
    form.addEventListener('submit', addNewItem);
}
//Add a new item    
function addNewItem(e){
    
    if (input.value ==''){
        alert('Add a new item.')
    }
    //Create li element
    const li =document.createElement('li');
    li.className='list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(input.value));
    //Create a element
    const a = document.createElement('a');
    a.classList='delete-item float-right';
    a.setAttribute('href', '#')
    a.innerHTML='<i class="fas fa-times"></i>';
    //add a element to li element
    li.appendChild(a);

    //add li to ul
    taskList.appendChild(li);

    //clear input
    input.value='';
     
    //to prevent refresh of the page
    e.preventDefault();
}




