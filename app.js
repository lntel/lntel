const animate = (selector, timeout = 300) => {

    return new Promise((res, rej) => {

        const element = document.querySelector(selector);

        if(!element) return rej('This element is not rendered');

        setTimeout(() => {
            element.classList.add(`${element.className}--visible`);
    
            clearTimeout(this);

            res();
    
        }, timeout);
    });
}

const techIconBase = '.introduction__technologies__';

const techIcons = {
    react: `${techIconBase}react`,
    graphql: `${techIconBase}graphql`,
    ts: `${techIconBase}ts`,
    mongo: `${techIconBase}mongo`,
}

animate('.introduction__hello', 600)
.then(() => {
    animate('.introduction__fullname', 800);
    animate('.introduction__about', 800);
    animate(techIcons.react, 600)
    .then(() => {
        animate(techIcons.graphql, 600)
        .then(() => {
            animate(techIcons.ts, 600)
            .then(() => {
                animate(techIcons.mongo, 600);
            })
        })
    })
})
.catch(console.error);
