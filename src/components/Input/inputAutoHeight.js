const inputAutoHeight = input => {
    if (input.current === null) return
    input.style.height = input.setAttribute('style', 'height: ' + (input.scrollHeight + 2) + 'px');
    input.addEventListener('input', e => {
        input.style.height = 'auto';
        input.style.height = (input.scrollHeight + 2) + 'px';
    });
}

export default inputAutoHeight