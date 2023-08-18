'use strict';

const feop=document.querySelector('.fesh');
const cosh=document.querySelector('.cosh'); 

const fepop=document.querySelector('.rew');
const copup=document.querySelector('.dew');

const feimup=document.querySelector('.feim');
const feimd=document.querySelector('.feimd');

const coimu=document.querySelector('.coimu');
const coimd=document.querySelector('.coimd');
const modal=document.querySelector('.modal');

const opm=document.querySelector('.opm');
const cpm=document.querySelector('.cpm')


// mobile
const mfea=document.querySelector('.fred');
const mfad=document.querySelector('.mfad');
const mfau=document.querySelector('.mfau');
const mfu=document.querySelector('.mfu');

const mcom=document.querySelector('.mcom');
const mcu=document.querySelector('.mcu');
const mcd=document.querySelector('.mcd');
const mfq=document.querySelector('.mfq')

mfea.addEventListener('click',function(){
    mfad.classList.toggle('hide');
    mfau.classList.toggle('hide');
    mfu.classList.toggle('hide')
})
mcom.addEventListener('click',function(){
    mcu.classList.toggle('hide');
    mcd.classList.toggle('hide');
    mfq.classList.toggle('hide');
})
feop.addEventListener('click',function(){
    fepop.classList.toggle('hide');
    feimup.classList.toggle('hide');
    feimd.classList.toggle('hide');
})

cosh.addEventListener('click',function(){
    copup.classList.toggle('hide');
    coimd.classList.toggle('hide');
    coimu.classList.toggle('hide');
})

opm.addEventListener('click',function(){
    modal.classList.remove('hide');
})

cpm.addEventListener('click',function(){
    modal.classList.add('hide');
})
