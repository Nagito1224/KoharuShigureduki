const typeTarget = document.querySelectorAll('.typing');

let options = {
    rootMargin: '0px',
    threshold: .5
}

let callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > .5 && entry.target.classList.contains('active') == false) {
            let typeContent = entry.target.innerHTML;
            // <br>タグを特別なトークンに置き換える
            typeContent = typeContent.replace(/<br>/g, '\n');
            let typeSprit = typeContent.split(/(<[^>]+>|[^<])/).filter(Boolean);
            let typeSpeed = entry.target.getAttribute('data-speed');
            entry.target.innerHTML = '';
            entry.target.classList.add('active');

            let typeLength = 0;
            let typeInterval = setInterval(() => {
                if (typeSprit[typeLength] == undefined) {
                    clearInterval(typeInterval);
                    return false;
                }
                if (typeSprit[typeLength] === '\n') {
                    entry.target.innerHTML += '<br>';
                } else {
                    entry.target.innerHTML += typeSprit[typeLength];
                }
                typeLength++;
            }, typeSpeed);

        }
    });
} 

let observer = new IntersectionObserver(callback, options);

typeTarget.forEach(e => {
    observer.observe(e);
});