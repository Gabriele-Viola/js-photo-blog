
let rowEl = document.querySelector('.row')
let overlayEl = document.querySelector('.overlay')
console.log(rowEl, overlayEl);


axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
.then(respo => {
    const photos = respo.data
    console.log(photos);
    
    let photoCols = ''
    photos.forEach( photo => {
        const {album, id, title, url} = photo        
        
        photoCols += markUp(url, title, id)
    });
    insertMarkup(rowEl, photoCols)
    
    let card1El = rowEl.querySelector('#is1')
    let card2El = rowEl.querySelector('#is2')
    let card3El = rowEl.querySelector('#is3')
    let card4El = rowEl.querySelector('#is4')
    let card5El = rowEl.querySelector('#is5')
    let card6El = rowEl.querySelector('#is6')
    console.log(card1El, card2El,card3El,card4El,card5El,card6El);

    card1El.addEventListener('click', function () {
     overlayEl.classList.remove('d-none')   
    })
    overlayEl.addEventListener('click', function () {
        overlayEl.classList.add('d-block')   
       })

})
    
    

function markUp(url, title, id) {

    const markup = `
    <div class="col">
<div id="is${id}" class="card photo${id}">
    <img class="pin" src="./assets/img/pin.svg" alt="">
    <div class="imag_card">
        <img src="${url}" alt="">
    </div>
    <!-- /.imag_card -->
     <div class="card_body">
        ${title}
     </div>
     <!-- /.card_body -->
</div>
</div>
<!-- /.col -->
`
    return markup
}
function insertMarkup(where, what) {
   return where.innerHTML = what
}