function setselected(id){
let goodStatus= document.getElementById('good').checked;
let cheapStatus= document.getElementById('cheap').checked;
let fastStatus= document.getElementById('fast').checked;

    if (id === 'good') {
        if (cheapStatus && fastStatus) {
            fastStatus = false;
        }
    } else if (id === 'cheap') {
        if (goodStatus && fastStatus) {
            goodStatus = false;
        }
    } else {
        if (goodStatus && fastStatus) {
            cheapStatus = false;
        }
    }
document.getElementById('good').checked=goodStatus;
document.getElementById('cheap').checked=cheapStatus;
document.getElementById('fast').checked=fastStatus;
}