function deleteElement(event)
{

  var target = event ? event.target : window.event.srcElement;
  if (target.className === "delete") target.parentNode.remove();

}

function editElement(event)
{
  var reg = /^[\s]{0,2}[a-zа-я]{1,40}[\!\.\?\-\_]?$/gim
  var target = event ? event.target : window.event.srcElement,
      textString = target.parentNode.firstChild,
      oldText = textString.textContent;
      rename = prompt('Rename the Task', textString.textContent);
   

  if(reg.test(rename) === false) 

  {
      alert('Invalid text!');
      return false;
  }
  if (rename === null) return false;

  textString.textContent = rename;

}

function done(event)
{

 var target = event ? event.target : window.event.srcElement;

   if(target.className === "text") 
    {

      target.className = "text checked";
    } else target.className = "text";          

}

function newElement() 
{     
    var reg = /^[\s]{0,2}[a-zа-я]{1,40}[\!\.\?\-\_]?$/gim
    var list = document.getElementById('list');

    var item = document.createElement('div');
        item.className = 'item';

    var del = document.createElement('button'),
        delTxt = document.createTextNode("X"); 
        del.className = "delete";
        del.setAttribute("onclick", "deleteElement()"); 
        del.appendChild(delTxt);

    var edit = document.createElement('button'),
        name = document.createTextNode('Edit');
        edit.className = 'edit';
        edit.appendChild(name);
        edit.setAttribute("onclick", "editElement()");

    var taskText = document.createElement('span');
        taskText.className = 'taskText';

    var inputValue = document.getElementById('toDoEl').value, 
        taskValue = document.createTextNode(inputValue); 
        taskText.className = 'text';
        taskText.setAttribute("onclick", "done()");
    
    if(reg.test(inputValue) === false || inputValue == '')

    {  
      console.log('False: ' + reg.test(inputValue));
      alert("Invalid text!");
      return false;

    } else if (inputValue.length>40) 

    {
      console.log('Length: ' + reg.test(inputValue));
      alert('Max length of Task - 40 characters!');
      return false;
    } 

    else 
    {  
      taskText.appendChild(taskValue);
      console.log('Append: ' + reg.test(inputValue));
      document.getElementById('toDoEl').value = "";
    }

    item.appendChild(taskText);
    item.appendChild(edit);
    item.appendChild(del);
    list.appendChild(item);
    

    console.log('Finish: ' + reg.test(inputValue));
    console.log(inputValue.length);

    return true;

}


function keyupAdd()
{
  if (event.keyCode === 13) newElement();
}



/*text.addEventListener("keyup", function(event) 
{
    
    event.preventDefault();
    if (event.keyCode === 13) newElement();
    
    
});*/

var remove = function()
{

  var liel = document.getElementById('list');
  
  if (liel.childNodes.length == 0)
  {
      alert('The List is empty');
      return false;
  } else 
  {
      while (liel.firstChild) 
      {
     
      liel.removeChild(liel.firstChild);
    
      }

    }

}


    
