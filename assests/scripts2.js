const panels2 = document.querySelectorAll('panel2')

//function to add active class

panels2.forEach(panel2) => {
    panel2.addEventListener('click', ()=>{
        removeClassList()
    })
}

//function to remove class

function removeClassList(){
    panels2.forEach(panel2)=>{
        panel2.classList.remove('active2')
    }

}