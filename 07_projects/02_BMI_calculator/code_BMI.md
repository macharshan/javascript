# Project( BMI Calculator)

## solution

### html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>BMI calculator</title>
</head>
<body>
    <main>
        <div class="container">
            <h1>BMI Calculator</h1>
            <form>
               <label for="height" id="heightHeading">Height in cm: 
                   <input type="text" class="height" id="heightValue" placeholder="Height">
               </label>
               <label for="weight" id="weightHeading">Weight in kg: 
                   <input type="text" class="weight" id="weightValue" placeholder="Weight">
               </label>
               <input type="submit" id="submit">
            </form>
            <p class="results"></p>
            <ul>
                <li>BMI Categories:</li>
                <li>Underweight = <18.5</li>
                <li>Normal weight = 18.5–24.9</li>
                <li>Overweight = 25–29.9</li>
                <li>Obesity = BMI of 30 or greater</li>    
            </ul>
        </div>
    </main>
</body>
<script src="index.js"></script>
</html>
```

### css

```css
*{
    padding: 0;
    margin: 0;
}

body{
    background-color: #212121;
    color: #fff;
}

main{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container{
    /* padding: 20px; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 40px;
    border: 5px solid #121212;
}

h1{
    padding: 28px;
    text-align: center;
    font-size: 50px;
    border-bottom: 5px solid #121212;
}


form{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 20px;
}

label{
    font-size: 20px;
}

input{
    height: 20px;
    margin-block: 10px;
}

#submit{
    width: 70px;
    height: 35px;
    font-size: 15px;
    font-weight: 500;
    background-color: #aaa;
    color: #212121;
}

li{
    text-align: center;
    list-style: none;
    padding: 10px;
    font-size: 18px;
}

li:first-child{
    padding: 10px;
    font-size: 35px;
}

li:last-child{
    padding-bottom: 28px;
}
```

### javascript

```javascript
addEventListener('submit',function(e){
    e.preventDefault();
    
    const heightValue = parseInt(document.querySelector(`#heightValue`).value)
    const weightValue = parseInt(document.querySelector(`#weightValue`).value)
    const result = document.querySelector(`.results`)


    if (heightValue == `` || heightValue <= 0 || isNaN(heightValue)){
        result.innerText = `please add a valid height`;
    } else if (weightValue == `` || weightValue <= 0 || isNaN(weightValue)){
        result.innerText = `please add a valid weight`;
    } else{
        const bmi = (weightValue/((heightValue*heightValue)/10000
        ))
        result.innerText = `your BMI value is ${bmi.toFixed(2)}`;
    }
})
```