// Part 1. Preview new reminders

const input = document.getElementById('input-reminder');
const preview = document.getElementsByClassName('preview')[0];
const remindersList = document.getElementById('reminders');
const saveButton = document.getElementById('submit-reminder');
const notice = document.getElementsByClassName('notice')[0];
const ENTER = 13;

onkeyup = function() {

  preview.innerHTML = input.value;

  if (event.which === ENTER) {
      saveReminder();
   }
}

// Part 2. Display helpful notices to the user

function showNotice(message, isError) {
  notice.innerHTML = message;

  if(isError) {
    notice.classList.add('error');
  }
  else{
    notice.classList.remove('error');
  }

  $('.notices').show();

  setTimeout(function() {
    $('.notices').hide()
  }, 5000)
}

// Part 3. Save reminders to browser storage

function saveReminder() {
  const index = localStorage.length;
  
  if(input.value !== '') {
    localStorage.setItem(`todoItem${index}`, input.value);
    addReminder(input.value);

    preview.innerHTML = '';
    input.value = '';
  }
  else{
    showNotice("Reminder can not be blank", true);
  }
  if(localStorage.length === index + 1) {
    showNotice("Reminder successfuly stored", false);
  }
  input.focus();
}
saveButton.onclick = saveReminder;

//Part 4. Fetch and display stored reminders when the page is reloaded

function addReminder(todoItemValue) {
  for(let index = 0; index < localStorage.length; index++) {
    const todoItemValue = localStorage.getItem(`todoItem${index}`);
  }
  if(todoItemValue !== null) {
    const newReminder = document.createElement('li');
    const newReminderValue = document.createTextNode(todoItemValue);
    newReminder.appendChild(newReminderValue);
    newReminder.classList.add('reminder');
    preview.after(newReminder);
  }
}

// Part 5. Delete all reminders

let deleteAll = document.getElementById('clear');

deleteAll.onclick = function() {
   if (window.localStorage.length == 0) {
      showNotice("Reminders does not exist", true);
   }
   else { 
      localStorage.clear();
      $('li').not('.preview').remove();

// Part 6. UX Improvements 
      input.value = "";
      input.focus();
   }
}
