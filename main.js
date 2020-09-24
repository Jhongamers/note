const addBtn = document.getElementById('add');

addBtn.addEventListener('click',()=>{
   addNewNote();
});

function addNewNote(){
    const note = document.createElement('div');
    note.classList.add('note');
     note.innerHTML = `
        <div class="notes">
          <div class="tools">
          <button class="edit">editar</button>
          <button class="delete">delete</butto>
          </div>
          <div class="main hidden"></div>
          <textarea></textarea>
        </div>
        `;
const   notes = document.querySelector('.notes');
const editbtn = note.querySelector('.edit');
const  deletebtn = note.querySelector('.delete');
const  textArea = note.querySelector('textarea');
const main      = note.querySelector('.main');
editbtn.addEventListener('click', () => {
     main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
});
deletebtn.addEventListener('click',(e)=>{
  note.remove();
});

textArea.addEventListener("input",(e)=>{
    const { value }  = e.target;
    main.innerHTML = marked(value);
});
    document.body.appendChild(note);
}


