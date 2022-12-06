let selection;

function myStar(number){
    selection = number;
    document.querySelectorAll('.rating_btn').forEach(element => element.classList.remove('selected'))
    document.getElementById(number).classList.add('selected')
    console.log(number)
}

function submission(){
    document.getElementById('rating_state').classList.add('hidden')
    document.getElementById('chosen_rating').innerText = selection
    document.getElementById('thanks').classList.remove('hidden')
}