function toggleDiff() {
    document.querySelectorAll('img.bg').forEach((elem) => {
        elem.classList.toggle('show-diff')
    })
}

function initButtonHandlers() {
    document.querySelectorAll('.toggle-diff-btn').forEach((btn) => {
        btn.addEventListener('click', toggleDiff)
    })
}

initButtonHandlers()
