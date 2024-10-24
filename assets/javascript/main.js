
const rowEl = document.querySelector('.row')
const overlayEl = document.querySelector('.overlay')
const bodyEl = document.querySelector('body')
console.log(rowEl, overlayEl);

const closeEl = overlayEl.querySelector('button')
const focusImgEl = overlayEl.querySelector('img')
const focusCardEl = overlayEl.querySelector('.focus-card-body')
console.log(focusImgEl);

axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
    .then(respo => {
        const photos = respo.data
        console.log(photos);

        let photoCols = ''
        let count = 0
        let cardEl, imgEl, titleEl
        let fixedText

        photos.forEach((photo, index) => {

            const { album, id, title, url } = photo
            console.log(index);
            
            count++
            console.log(title);
            fixedText = title.substring(0, 1).toUpperCase() + title.substring(1).toLowerCase()
            console.log(fixedText);

            photoCols += markUp(url, fixedText, id)

            console.log(count);

        });

        insertMarkup(rowEl, photoCols)

        // let imgElArr = []
        // let titleElArr = []

        const allCardEl = rowEl.querySelectorAll('.col')
        
         allCardEl.forEach(Card =>{
            Card.addEventListener('click', function(){
                console.log(Card);
                
                overlayEl.classList.remove('d-none')
                console.log(focusImgEl.src);
                const imgCard = Card.querySelector('#img')
                focusImgEl.src = imgCard.src
                const titleCard = Card.querySelector('#title')
                
                 focusCardEl.innerText = titleCard.innerText
            })
         })
        

        // for (let i = 1; i <= count; i++) {

        //     cardEl = rowEl.querySelector(`#is${i}`)
        //     imgEl = document.getElementById(`img${i}`)
        //     titleEl = document.getElementById(`title${i}`).innerText

        //     imgElArr.push(imgEl)
        //     titleElArr.push(titleEl)

        //     cardEl.addEventListener('click', function () {

        //         overlayEl.classList.remove('d-none')

        //         focusImgEl.src = imgElArr[i - 1].src
        //         focusCardEl.innerText = titleElArr[i - 1]
        //     })

        // }

        closeEl.addEventListener('click', function () {
            overlayEl.classList.add('d-none')

        })


    })



function markUp(url, title, id) {

    const markup = `
    <div class="col">
<div id="is${id}" class="card photo${id}">
    <img class="pin" src="./assets/img/pin.svg" alt="">
    <div class="imag_card">
        <img id="img" src="${url}" alt="">
        </div>
    <!-- /.imag_card -->
    <div id="title" class="card_body">
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

