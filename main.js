const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const submit = document.querySelector('#submit');
const result = document.querySelector('#result');
const bmiForm = document.querySelector('#bmiForm');

bmiForm.addEventListener('submit', function(e){
    e.preventDefault();
    let heightInMtr = height.value / 100;
    let bmi = (parseFloat(weight.value) / (heightInMtr * heightInMtr)).toFixed(3);
    let feedback = "";

    if(bmi < 18.5){
        feedback = "You are underweight";
    }
    else if(bmi >= 18.5 && bmi < 24.9){
        feedback = "You are normal weight";
    }
    else if(bmi >= 25 && bmi < 29.9){
        feedback = "You are overweight";
    }
    else{
        feedback = "You are obese";
    }

    result.innerHTML = `Your BMI is:&nbsp&nbsp${bmi}<br>(${feedback})`;
})

