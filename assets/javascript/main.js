
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
        let cardEl
        let imgEl
        let titleEl
        photos.forEach(photo => {
            const { album, id, title, url } = photo
            count++
            photoCols += markUp(url, title, id)
            
        console.log(count);
        
            
            
        });
        insertMarkup(rowEl, photoCols)
        let cardElArr = []
        let imgElArr = []
        let titleElArr =[]
        for (let i = 1; i <= count; i++) {
            cardEl = rowEl.querySelector(`#is${i}`)
            imgEl = document.getElementById(`img${i}`)
            titleEl = document.getElementById(`title${i}`)
            console.log(cardEl, imgEl, titleEl);
            cardElArr.push(cardEl)
            imgElArr.push(imgEl)
            titleElArr.push(titleEl)
            
        }
        console.log(cardElArr);
        
        cardElArr[0].addEventListener('click', function () {
            overlayEl.classList.remove('d-none')
            bodyEl.classList.add('overflow')
            focusImgEl.src = imgElArr[0].src
        focusCardEl.innerText =titleElArr[0].innerText
        })
        


        function selectImgEl(number) {
            let imgEl = document.getElementById(`img${number}`)
            return imgEl
        }





        closeEl.addEventListener('click', function () {
            overlayEl.classList.add('d-none')
            bodyEl.classList.remove('overflow')

        })



    })



function markUp(url, title, id) {

    const markup = `
    <div class="col">
<div id="is${id}" class="card photo${id}">
    <img class="pin" src="./assets/img/pin.svg" alt="">
    <div class="imag_card">
        <img id="img${id}" src="${url}" alt="">
        </div>
    <!-- /.imag_card -->
    <div id="title${id}" class="card_body">
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
// function singleCard(number) {
//     let cardEl = rowEl.querySelector(`#is${number}`)
//     let imgEl= document.getElementById(`img${number}`)
//     let titleEl = document.getElementById(`title${number}`)
//     return cardEl, imgEl, titleEl
// }
