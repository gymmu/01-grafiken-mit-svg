function toggleDiff() {
    document.querySelectorAll('img.bg').forEach((elem) => {
        elem.classList.toggle('show-diff')
    })
}

/*
When a details element is closed this function will create a new details 
element with the same content and replace it.
*/
function detailsToggled(e) {
    if (e.srcElement.open) return

    const copy = document.createElement('details')
    copy.innerHTML = e.srcElement.innerHTML
    copy.addEventListener('toggle', detailsToggled)

    e.srcElement.parentNode.replaceChild(copy, e.srcElement)
}

function initButtonHandlers() {
    document.querySelectorAll('.toggle-diff-btn').forEach((btn) => {
        btn.addEventListener('click', toggleDiff)
    })

    document.querySelectorAll('.toggle-visible').forEach((btn) => {
        btn.addEventListener('click', ({ target }) => {
            const parent =
                target.parentElement.parentElement.parentElement.querySelector(
                    '.img-container'
                )
            parent.classList.toggle('fade-out')
            parent.classList.toggle('fade-in')
        })
    })

    // Add the event listener to all details elements on the page
    document.querySelectorAll('details').forEach((d) => {
        d.addEventListener('toggle', ({ target }) => {
            const imgContainer = target.querySelector('.img-container')
            if (target.open) {
                imgContainer.classList.remove('fade-out')
                void imgContainer.offsetWidth
                imgContainer.classList.add('fade-in')
            } else {
                imgContainer.classList.remove('fade-in')
                void imgContainer.offsetWidth
                imgContainer.classList.add('fade-out')
            }
        })
    })
}

initButtonHandlers()
