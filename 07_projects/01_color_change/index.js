const body = document.querySelector(`body`)

const buttons = document.querySelectorAll(`.button`)
console.log(buttons);

addEventListener(`click`, function(e){
    console.log(e);
    console.log(e.target.id);
    if(e.target.id){
        body.style.backgroundColor = e.target.id;
    } else{
        body.style.backgroundColor = `#fff`;
    }
})
