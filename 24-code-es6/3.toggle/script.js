const toggleClass = ([...els], className) => {
    [...els].forEach(el => el.classList.toggle(className, true))
}

toggleClass(document.querySelectorAll('p'), 'special');