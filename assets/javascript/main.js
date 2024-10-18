
let rowEl = document.querySelector('.row')

axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
.then(respo => {
    const photos = respo.data
    console.log(photos);
    
    let photoCols = ''
    photos.forEach( photo => {
        const {album, id, title, url} = photo        
        
        photoCols += markUp(url, title)
    });
      insertMarkup(rowEl, photoCols)
})


function markUp(url, title) {

    const markup = `
    <div class="col">
<div class="card">
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