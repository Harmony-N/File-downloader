const inputField= document.querySelector('input')
const downlaodButton = document.querySelector('button')

downlaodButton.addEventListener('click', (e)=>{
    e.preventDefault()
    downlaodButton.innerText="Downloading File..."
    fetchUrl(inputField.value)
   
});

function fetchUrl(url){
    fetch(url)
     .then(res =>
        res.blob()
     ).then(file => {

       let tempUrl= URL.createObjectURL(file)
       let aTag= document.createElement('a')
       aTag.href=tempUrl
       aTag.download= url.replace(/^.*[\\\/]/, '')
       document.body.appendChild(aTag)
       aTag.click()
       aTag.remove()
       downlaodButton.innerText="Download File"
}) .catch( () =>{
    downlaodButton.innerText="Download File"
    alert('Failed to download please try again')
})
}