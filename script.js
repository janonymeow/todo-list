
function addTask() {
  const inputBox = document.getElementById("input-box");
  const listContainer = document.getElementById("list-container");

      if(inputBox.value.trim() === '') {
       alert("You must write something"); 
       return;
      }
    
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      listContainer.appendChild(li);
    

    li.addEventListener('click', () => {
      li.classList.toggle('checked');
    });

    li.addEventListener('dblclick', () => {
      li.remove();
    });

  }
 
