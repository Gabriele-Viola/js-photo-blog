
const rowEl = document.querySelector('.row')
const overlayEl = document.querySelector('.overlay')
const bodyEl = document.querySelector('body')
console.log(rowEl, overlayEl);
const prevEl = document.querySelector('.prev')
console.log(prevEl);
const nextEl = document.querySelector('.next')
console.log(nextEl);

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

        photos.forEach(photo => {

            const { album, id, title, url } = photo
            count++
            console.log(title);
            fixedText = title.substring(0, 1).toUpperCase() + title.substring(1).toLowerCase()
            console.log(fixedText);

            photoCols += markUp(url, fixedText, id)

            console.log(count);

        });

        insertMarkup(rowEl, photoCols)

        let imgElArr = []
        let titleElArr = []

        for (let i = 1; i <= count; i++) {

            cardEl = rowEl.querySelector(`#is${i}`)
            imgEl = document.getElementById(`img${i}`)
            titleEl = document.getElementById(`title${i}`).innerText

            imgElArr.push(imgEl)
            titleElArr.push(titleEl)
            
            let select = i
            let reset = 0
            cardEl.addEventListener('click', function () {
                focusClick(focusImgEl, focusCardEl, select, imgElArr, titleElArr )

                nextEl.addEventListener('click', function () {
                       if (select < count) {
                           select ++
                           console.log(select, count);
                           
                           
                           focusClick(focusImgEl, focusCardEl, select, imgElArr, titleElArr )
                        
                       }  else {
                        select = i
                        focusClick(focusImgEl, focusCardEl, select, imgElArr, titleElArr )
                       }                        
                    
                    
                })
                prevEl.addEventListener('click',function () {
                    if (select > count) {
                        select --
                        console.log(select, count);
                        
                        
                        focusClick(focusImgEl, focusCardEl, select, imgElArr, titleElArr )
                     
                    }  else {
                     select = i
                     focusClick(focusImgEl, focusCardEl, select, imgElArr, titleElArr )
                    }                        
                 
                    
                } )
                
                
            })
        }

        closeEl.addEventListener('click', function () {
            overlayEl.classList.add('d-none')

        })


    })

function focusClick(focusImgEl, focusCardEl, select, imgElArr, titleElArr ) {
    overlayEl.classList.remove('d-none')

    focusImgEl.src = imgElArr[select - 1].src
    focusCardEl.innerText = titleElArr[select - 1]
}

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

