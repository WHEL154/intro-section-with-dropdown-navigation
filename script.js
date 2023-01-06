const fbtn = document.getElementById('fbtn');
const cbtn = document.getElementById('cbtn');
const fblog = document.getElementById('fblog');
const cblog = document.getElementById('cblog');

fbtn.addEventListener('click', () => {
    if(fblog.classList.contains('dn')) {
        fblog.classList.remove('dn')
    }
    else {
        fblog.classList.add('dn')
    }
})

cbtn.addEventListener('click', () => {
    if(cblog.classList.contains('dn')){
        cblog.classList.remove('dn')
    }
    else {
        cblog.classList.add('dn')
    }
})