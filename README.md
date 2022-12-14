# Calculator

This calculator app is part of the projects required during the BRAINNEST Front-End Development Program. It has the basic functionalities of a calculator. 

![Mockup](./images/mockup.png)

Live Link:
https://jtm2021.github.io/Calculator/

<br>

## Keyboard Functionality
This calculator app has an added keyboard functionality that allows users to use the keyboard when using the calculator
    
IMPORTANT INSTRUCTIONS:

`0` `1` `2` `3` `4` `5` `6` `7` `8` `9` - users can use the number keys for the operands
<br>
`+` `-` `*` `/` - regular mathematical symbols for the operators
<br>
`%` - this represents the modulo operator and doesn't represent percentage
<br>
`enter` / `=` - can be used to calculate the mathematical expression
<br>
`.` - can be used for adding a decimal point to a number
<br>
`Backspace` - use to delete recent number input
<br>
`Escape key` / `Delete Key` - use to clear whole calculator output display
<br>
`n` - use this to indicate a number to be of negative value

<br>

## Handling Calculationn Issues
    - An alert message will pop up once the user divides a number with `0`. After clicking `OK`, the screen will revert back to previous input.

![Mockup](./images/division-alert.png)

    - Users can input a decimal point but the code prevent users to input more than one decimal point at a time.
    
    - The negative symbol is deactivated when the display is empty. Users can only convert a value to negative once there is number input.

    

## Wireframes
The wireframe for this project were made digitally using [**Figma**](https://www.figma.com/).


<details><summary>Click To See Wireframes</summary>

### Big Screens (Laptops)
![Laptops Wireframe](./images/laptop-wireframe.png "Laptops Wireframe")
### Medium Sized Screens (Tablets)
![Tablets Wireframe](./images/tablet-wireframe.png "Tablets Wireframe")
### Small Screen Devices (Phones)
![Mobile Phones Wireframe](./images/phone-wireframe.png "Mobile Phones Wireframe")

</details>

<br>

## Validator Testing ##
- HTML - No errors were returned when passing through the official [**W3C validator**](https://validator.w3.org)
    - HTML file
        ![index.html file](./images/html-validation.png)


- CSS - No errors were found when passing through the official [**(Jigsaw) validator**](https://jigsaw.w3.org/css-validator)
    - ![CSS](./images/css-validation.png)

- Lighthouse - I've tested the performance of the page using Google Chrome Lighthouse.
    - ![Lighthouse](./images/lighthouse.png)

- Javascript - No errors were found when passing through the javascript code quality tool [**JSHint**](https://jshint.com/)
    - ![Javascript](./images/js-validation.png)