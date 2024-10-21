
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
            titleEl = document.getElementById(`title${i}`).innerText.substring(0).toUpperCase()+document.getElementById(`title${i}`).innerText.substring(1).toUpperCase()+
            
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
        cardElArr[1].addEventListener('click', function () {
            overlayEl.classList.remove('d-none')
            bodyEl.classList.add('overflow')
            focusImgEl.src = imgElArr[1].src
        focusCardEl.innerText =titleElArr[1].innerText
        })
        cardElArr[2].addEventListener('click', function () {
            overlayEl.classList.remove('d-none')
            bodyEl.classList.add('overflow')
            focusImgEl.src = imgElArr[2].src
        focusCardEl.innerText =titleElArr[2].innerText
        })
        cardElArr[3].addEventListener('click', function () {
            overlayEl.classList.remove('d-none')
            bodyEl.classList.add('overflow')
            focusImgEl.src = imgElArr[3].src
        focusCardEl.innerText =titleElArr[3].innerText
        })
        cardElArr[4].addEventListener('click', function () {
            overlayEl.classList.remove('d-none')
            bodyEl.classList.add('overflow')
            focusImgEl.src = imgElArr[4].src
        focusCardEl.innerText =titleElArr[4].innerText
        })
        cardElArr[5].addEventListener('click', function () {
            overlayEl.classList.remove('d-none')
            bodyEl.classList.add('overflow')
            focusImgEl.src = imgElArr[5].src
        focusCardEl.innerText =titleElArr[5].innerText
        })
        
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

