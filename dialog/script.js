const dialog = document.getElementById('myDialog')
const output = document.querySelector('output')

dialog.addEventListener('close', (e) => {
  console.log(e)
  output.value = dialog.returnValue
    ? dialog.returnValue
    : 'I don\'t know'
})

function openDialog() {
  dialog.showModal();
}

function closeDialog(event, action) {
  event.preventDefault();
  let favoriteDrink = '';
  if (action === 'default') {
    const _formData = new FormData(document.forms.favoriteDrink)
    favoriteDrink = _formData.get('answer')
  }
  document.querySelector('input[name="answer"]').value = ''
  dialog.close(favoriteDrink)
}