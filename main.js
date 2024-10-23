const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const submit = document.querySelector('#submit');
const result = document.querySelector('#result');
const bmiForm = document.querySelector('#bmiForm');

bmiForm.addEventListener('submit', function(e){
    e.preventDefault();
    let heightInMtr = height.value / 100;
    result.innerHTML = 
        (parseFloat(weight.value) / (heightInMtr*heightInMtr)).toFixed(3);
})

