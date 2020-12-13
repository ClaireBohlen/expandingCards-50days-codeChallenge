const panels2 = document.querySelectorAll('.panel2')

//function to add active class

panels2.forEach((panel2) => {
    panel2.addEventListener('click', ()=>{
        removeActiveClass()
        panel2.classList.add('active2')
    })
})

//function to remove class

function removeActiveClass(){
    panels2.forEach(panel2=>{
        panel2.classList.remove('active2')
    })

}