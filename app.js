// const sections = document.querySelectorAll('.section');
// const sectBtns = document.querySelectorAll('.controls');
// const sectBtn = document.querySelectorAll('.control');
// const allSections = document.querySelector('.main-content');

function pageTransitions(){
    [...document.querySelectorAll('.control')].forEach(button => {
        button.addEventListener('click', function sectBtn(){
            document.querySelector('.active-btn').classList.remove('active-btn');
            this.classList.add('active-btn');
            document.querySelector('.active').classList.remove('active');
            document.getElementById(button.dataset.id).classList.add('active');
        })
    })
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
    })
}

pageTransitions();
// const pageTransitions = () => {
//     //Button click active class function
//     sectBtn.forEach(btn => {
//         btn.addEventListener('click', () => {
//             const currentBtn = document.querySelectorAll('.active-btn');
//             currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
//             btn.className += ' active-btn';
//         });
//     });

//     // Sections Active Class
//     allSections.addEventListener('click', (e) => {
//         const id = e.target.dataset.id;
//         if(id) {
//             // remove selected from other button
//             sectBtns.forEach((btn) => {
//                 btn.classList.remove('active');
//             })
//             e.target.classList.add('active')

//             // hide other sections
//             sections.forEach((section) => {
//                 section.classList.remove('active')
//             })
//             const element = document.getElementById(id);
//             element.classList.add('active');
//         }
//     })
// };

// Here's a step-by-step explanation of how the function works:

//     The function is defined using arrow function syntax. This makes the function definition more concise, as compared to the traditional function syntax.

//     Inside the function, the forEach method is used to iterate over each element of the sectBtn array. The forEach method takes a callback function as an argument, which is executed for each element in the array.

//     For each button in the sectBtn array, the addEventListener method is called to attach a click event listener to the button. The click event listener is defined using an anonymous arrow function.

//     When a button is clicked, the anonymous arrow function is executed. The first line of the function uses querySelectorAll to find all elements with the class "active-btn". Since we expect there to be only one active button at a time, we access the first element of the resulting array with currentBtn[0].

//     The className property of the previously active button is then updated to remove the "active-btn" class by using the replace method.

//     Finally, the className property of the clicked button is updated to add the "active-btn" class by using the += operator to concatenate the current class name with the string " active-btn".

// That's it! The pageTransitions function provides a way to handle button click events and update the class of the clicked button and the previously active button.

