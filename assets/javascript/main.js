
let rowEl = document.querySelector('.row')

axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
.then(respo => {
    const photos = respo.data
    console.log(photos);
    
    let photoCols = ''
    photos.forEach( photo => {
        const {album, id, title, url} = photo
        console.log(id, url);
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
        console.log(markup);
        console.log(rowEl);
        
        
        photoCols += markup
    });
    rowEl.innerHTML = photoCols
    




    
})
