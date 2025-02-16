var cel = document.getElementById('cel');
var fah = document.getElementById('fah');
var kel = document.getElementById('kel');

cel.addEventListener('input', function(){
    let c = this.value;
    let f = (c * 9/5)+32;
    let k = c + 273.15;

    if(!Number.isInteger(f)){
        f = f.toFixed(4)
    }
    fah.value = f;
    kel.value = k;
});

fah.addEventListener('input', function(){
    let f = this.value;
    let c = (f - 32) * 5/9;
    let k = c + 273.15;

    if(!Number.isInteger(c)){
        c = c.toFixed(4)
    }
    if(!Number.isInteger(k)){
        k = k.toFixed(4)
    }
    cel.value = c;
    kel.value = k;
});

kel.addEventListener('input', function(){
    let k = this.value;
    let c = k - 273.15;
    let f = c * 9/5 + 32;

    if(!Number.isInteger(c)){
        c = c.toFixed(4)
    }
    if(!Number.isInteger(f)){
        f = f.toFixed(4)
    }
    cel.value = c;
    fah.value = f;
});