const dialog = document.querySelector("dialog")

const showDialog = document.querySelector('button')

const closeDialog = dialog.querySelector('button')

showDialog.addEventListener('click', () =>{
   dialog.showModal()
})

closeDialog.addEventListener('click', () =>{
   dialog.close()
})