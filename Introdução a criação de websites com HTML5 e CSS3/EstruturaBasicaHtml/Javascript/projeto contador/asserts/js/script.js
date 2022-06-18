let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
    console.log(count)


    if(count >= 0){
        console.log(count)
        CURRENT_NUMBER.style.color = 'blue';
    }
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
    if(count < 0){
        console.log(count)
        CURRENT_NUMBER.style.color = 'red';
    }
}

function test() {
	kdowkdpo;
}