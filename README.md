# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Screenshot](https://github.com/PiperRc/Interactive-Rating/blob/main/screenshots/screenshot.png)


### Links

[Solution Url](https://github.com/PiperRc/Interactive-Rating)

[Live Site Url](https://piperrc.github.io/Interactive-Rating/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
-Javascript

### What I learned

The Checkbox Hack:
At first, I didnt know how to make the buttons act like radio buttons, but a google search pointed me to the [Checkbox Hack](https://css-tricks.com/the-checkbox-hack/).

```html
   <div class="buttons">
                <input id="btn1" type="radio" name="radiobtn" class="radiobtn" required>
                <label for="btn1">1</label>

                <input id="btn2" type="radio" name="radiobtn" class="radiobtn">
                <label for="btn2">2</label>

                <input id="btn3" type="radio" name="radiobtn" class="radiobtn">
                <label for="btn3">3</label>

                <input id="btn4" type="radio" name="radiobtn" class="radiobtn">
                <label for="btn4">4</label>

                <input id="btn5" type="radio" name="radiobtn" class="radiobtn">
                <label for="btn5">5</label>
            </div>
```
```css
.buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
}

input[name="radiobtn"] {
    display: none;
}

input[name="radiobtn"]+label {
    /* style passive state as you like */
    color: var(--lGrey);
    border-radius: 50%;
    width: min(5%, 20px);
    display: flex;
    justify-content: center;
    padding: 1.2rem;
    background-color: var(--vDBlue);
    font-size: 1.5rem;
}

input[name="radiobtn"]:checked+label {
    /* style checked state as you like */
    background-color: var(--orange);

}

input[name="radiobtn"]+label:hover {
    /* style checked state as you like */
    cursor: pointer;
}

}
```


### Continued development

Used Relative and Absoulte positioning to achieve what server side code.I have made learning that and I plan on doing this over.

### Useful resources

- [Css tricks](https://css-tricks.com/the-checkbox-hack/) -Learnt the checkbox hack here


## Author

- Frontend Mentor - [@PiperRc](https://www.frontendmentor.io/profile/PiperRc)
- Github- [Github](https://github.com/PiperRc)

## Acknowledgments

Frontend Mentor for providing free exercises where I can put my acquired skills to use. Colt Steele, his online course being where I learnt the majority of my html,css and js knowledge.
