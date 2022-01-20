//Bmi Limits
const maxBmi = 120;
const underweightLimit = 30;
const overweightLimit = 90;

//Get root attributes
root = document.documentElement;

function getRandomDouble(){
    return Math.random()*maxBmi;
}

//Create random Bmi for the result
const randomBmi = getRandomDouble().toFixed(2);

//Slide the triangle according to the result
const sliderDistance = randomBmi*3;
root.style.setProperty('--end-transform', `translate(${sliderDistance}px)`);

//Automatic counter for displaying the Bmi
const counters = document.querySelectorAll('.counter');
counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () =>{
        counter.setAttribute("data-target", randomBmi)
        const target = +counter.getAttribute ('data-target');

        const c = +counter.innerText;

        //Increment target by ->
        const increment = target / 50;

        if (c < target){
            counter.innerText = `${(c + increment).toFixed(2)}`
            setTimeout(updateCounter, 1)
        }
        else{
            counter.innerText = target;
        }
    };

    updateCounter();
});
