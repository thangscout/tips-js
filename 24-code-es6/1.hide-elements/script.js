const hide = ([...el]) => [...el].forEach(e => e.style.display = 'none');


hide(document.querySelectorAll('img'));