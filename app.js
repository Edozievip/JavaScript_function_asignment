function myData (name, weight) {
    name = prompt('Enter your name');
    weight = prompt('Enter your weight in kg') / 2.20462;

    return `My name is ${name} and I weighs ${weight}lbs`
}

alert(myData());