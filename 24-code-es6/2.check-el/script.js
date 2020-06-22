const hassClass = ( [...els], className ) => {
  [...els].forEach(el => {
    if ( el.classList.contains(className) ){
      console.log('el', el)
    }
  })
}

hassClass(document.querySelectorAll('p'), 'special');