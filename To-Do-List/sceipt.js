const form= document.querySelector('form')
const input= document.querySelector('input')
const alltask=document.querySelector(".alltask")



form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const text= input.value.trim();

    if(text==""){
        return;
    }

    const parent = document.createElement('div')
    const task= document.createElement('span')
    task.textContent=text;
    task.classList.add("task")


    const doneBtn=document.createElement('button')
    doneBtn.textContent="Done"
    doneBtn.style.width="60px"
    doneBtn.classList.add("doneBtn")

    const delBtn=document.createElement('button')
    delBtn.textContent="Delete"
    delBtn.style.width="60px"
    delBtn.classList.add("delBtn")

    doneBtn.addEventListener('click',()=>{
        task.style.textDecoration="line-through";
        task.style.color="grey"

    })

    delBtn.addEventListener('click',()=>{
        parent.remove()
    })
  


    parent.append(task,doneBtn,delBtn)

    alltask.append(parent);

    form.reset()
})