const panels = document.querySelectorAll('.panel')
// bringing in all the panels from the html: panel is essentially an array (NODE LIST) that we can loop through. I can target specific panels


// loop though panels
panels.forEach((panel)=>{
    panel.addEventListener('click', ()=>{ // lisen for click and then trigger function
        removeActiveClasses() //when clicked this function is called (remove class)
        panel.classList.add('active') //We will add a class when a specifc panel is clickd
    })
})

// loop though panels and remove 'active' classes
function removeActiveClasses (){
    panels.forEach(panel => {
        panel.classList.remove('active') //removing all the active classes
    })
}
// comment