
const rowEl = document.querySelector('.row')
const overlayEl = document.querySelector('.overlay')
const bodyEl = document.querySelector('body')
console.log(rowEl, overlayEl);


axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
    .then(respo => {
        const photos = respo.data
        console.log(photos);

        let photoCols = ''
        photos.forEach(photo => {
            const { album, id, title, url } = photo

            photoCols += markUp(url, title, id)
        });
        insertMarkup(rowEl, photoCols)

        const closeEl = overlayEl.querySelector('button')
        const focusImgEl = overlayEl.querySelector('img')
        const focusCardEl = overlayEl.querySelector('.focus-card-body')
        console.log(focusImgEl);






        selecteCard(1).addEventListener('click', function () {
            overlayEl.classList.remove('d-none')
            bodyEl.classList.add('overflow')
            focusImgEl.src = selectImgEl(1).src
            focusCardEl.innerText = selectTitleEl(1)
        })
        selecteCard(2).addEventListener('click', function () {
            overlayEl.classList.remove('d-none')
            bodyEl.classList.add('overflow')

            focusImgEl.src = selectImgEl(2).src
            focusCardEl.innerText = selectTitleEl(2)

        })
        selecteCard(3).addEventListener('click', function () {
            overlayEl.classList.remove('d-none')
            bodyEl.classList.add('overflow')

            focusImgEl.src = selectImgEl(3).src
            focusCardEl.innerText = selectTitleEl(3)

        })
        selecteCard(4).addEventListener('click', function () {
            overlayEl.classList.remove('d-none')
            focusImgEl.src = selectImgEl(4).src
            focusCardEl.innerText = selectTitleEl(4)
        })
        selecteCard(5).addEventListener('click', function () {
            overlayEl.classList.remove('d-none')
            focusImgEl.src = selectImgEl(5).src
            focusCardEl.innerText = selectTitleEl(5)

        })
        selecteCard(6).addEventListener('click', function () {
            overlayEl.classList.remove('d-none')
            focusImgEl.src = selectImgEl(6).src
            focusCardEl.innerText = selectTitleEl(6)

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
// function singleCard(number) {
//     let cardEl = rowEl.querySelector(`#is${number}`)
//     let imgEl= document.getElementById(`img${number}`)
//     let titleEl = document.getElementById(`title${number}`)
//     return cardEl, imgEl, titleEl
// }
function selecteCard(number) {
    let cardEl = rowEl.querySelector(`#is${number}`)
    return cardEl
}

function selectImgEl(number) {
    let imgEl = document.getElementById(`img${number}`)
    return imgEl
}
function selectTitleEl(number) {
    let titleEl = document.getElementById(`title${number}`)
    return titleEl.innerText
}