const formToObject = form => (
    Array.from( new FormData(form)).reduce(
        (acc, [key, value]) => ({
            ...acc,
            [key]:value
        }),
        {}
    )
)

console.log(Array.from( new FormData(document.querySelector('form'))))

console.log(formToObject(document.querySelector('form')));