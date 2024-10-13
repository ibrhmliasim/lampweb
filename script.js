const lightDuyme = document.querySelector('.lightbtn')
const darkDuyme = document.querySelector('.darkbtn')

darkDuyme.addEventListener('click', function darkMode(){
    const darkDuyme = document.body;
    darkDuyme.classList.add('dark-mode');
})

lightDuyme.addEventListener('click', function lightMode(){
    const lightDuyme = document.body;
    lightDuyme.classList.add('light-mode');
})


// lightDuyme.addEventListener('click', function lightMode(){
//     const lightDuyme = document.body;
//     lightDuyme.classList.toggle('light-mode')
// })


// darkDuyme.onclick = function darkMode(){
//     darkDuyme.classList.toggle('dark.mode');
// }

// function darkMode(){
//     const darkDuyme = document.body;
//     darkDuyme.classList.add("dark-mode");
// }

// lightDuyme.addEventListener('click', function lightMode(){
//     lightDuyme.classList.toggle('light-mode')

// })



// function lightMode()
// function darkMode()