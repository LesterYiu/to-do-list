/* PSEUDO CODE

    add a submit event listener on the form

    stop the page from refreshing when the form is submitted

    only if the user has entere an actual task (AKA input is not submitted)

    clear input field when submitted

    grab the user's to do item from the form input
    display to do on the page within an li element
        include a checkbox icon within the li
    add the li element to the ul

    clicking on a task allows you to toggle between checked/unchecked (AKA done vs not done) 

    BONUS: 

    Add a "reset" button which clears all the TO-DOs
    Add a "remove" task button to each task
    Add a congratulations alert when all of the existing TO DOs are checked off
    Add a "Take a Break" message if 5 or more tasks are completed
*/

// NOTE: element is typically refered to as "el" in variable names

// NOTE: when tracking user input, it is conventional to use the query element's value however textLength/tetContent would work as well

// NOTE: by using innerHTML and textContent on the same element, each by setting new content, will overwrite one another. Erasing the one stated before it. This overwritting behaviour is to either create a new element and appending it or utilizing text nodes







const formEl = document.querySelector('form');

const inputEl = document.getElementById('toDoItem');

const ulEl = document.querySelector('ul');


console.log(inputEl);

formEl.addEventListener('submit', function (e) {
    e.preventDefault();  
            //Utilizing the event object, we'll be able to prevent the default behaviour of a form when it is submitted which is when it is submits, it will reload.
    


    if (inputEl.value !== '') {

        console.log('A value has been entered!');

        console.log(inputEl.value);

        const liEl = document.createElement('li');

        liEl.innerHTML = `<i class="fa-regular fa-square"></i>`;
        
        const toDoContent = document.createTextNode(`${inputEl.value}`);
        //By creating text nodes, we get the added value of adding it to innerHTML without overwriting it

        liEl.append(toDoContent);

        console.log(toDoContent);

        ulEl.appendChild(liEl);

        

        inputEl.value = '';
        
    } else {

        alert('Please do not leave input empty before submitting the form.');

    }
});