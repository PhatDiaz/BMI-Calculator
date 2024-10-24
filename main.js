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
        feedback = "You are underweight. Consider increasing your intake of nutrient-rich foods to reach a healthier weight.";
    }
    else if(bmi >= 18.5 && bmi < 24.9){
        feedback = "You have a normal weight. Keep maintaining a balanced diet and regular physical activity to stay healthy.";
    }
    else if(bmi >= 25 && bmi < 29.9){
        feedback = "You are in the overweight range. It might be helpful to adjust your diet and increase physical activity to manage your weight.";
    }
    else{
        feedback = "You fall into the obese category. It's important to focus on a healthier lifestyle. Consider consulting a healthcare provider or nutritionist for personalized advice.";
    }

    result.innerHTML = `Your BMI is:&nbsp&nbsp${bmi}<br>(${feedback})`;
})

