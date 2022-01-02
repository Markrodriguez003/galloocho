import ModelDemo from "../../models/Rooster1.glb"

console.log("what");

const modelVariants = document.querySelector("model-viewer#rooster");



// ! PROBLEM IS THAT THE MODEL FIRST NEEDS ...
// ! TO BE LOADED BEFORE ANY OF THE SCRIPT SEQUENCES BELOW CAN WORK
// ! 


window.onload = function () {
    // THIS TESTS TO SEE IF MODEL VARIANT IS LOADED.
    // console.log(modelVariants.modelIsVisible);
    modelVariants.addEventListener("load", function () {

        console.log("does this work");

        if (modelVariants.modelIsVisible === true) {
            // PRINTS OUT MODEL ELEMENT HTML
            console.log(modelVariants);

            // LISTS ALL VARIANTS (ARRAY)
            console.log(modelVariants.availableVariants);

            // LISTS TOTAL AMOUNT OF VARIANTS
            console.log(modelVariants.availableVariants.length);

            // EXAMPLE - PRINTS OUT THE 2 ELEMENT WITHIN VARIANT ARRAY ABOVE
            console.log(modelVariants.availableVariants[2]);

            // PRINTS OUT RANDOM NUMBER
            let x = Math.floor(Math.random() * 10);
            console.log("RANDOM NUM --> " + x);
        } else if (modelVariants.modelIsVisible === null) {
            console.log("what the fuck");
        }
    });
};

















// ! OTHER WAY OF CHECKING TO SEE IF MODEL IS LOADED?
// modelVariants.addEventListener('load', () => {

// PRINTS OUT MODEL ELEMENT HTML
// console.log(modelVariants);

// LISTS ALL VARIANTS (ARRAY)
// console.log(modelVariants.availableVariants);

// LISTS TOTAL AMOUNT OF VARIANTS
// console.log(modelVariants.availableVariants.length);

// EXAMPLE - PRINTS OUT THE 2 ELEMENT WITHIN VARIANT ARRAY ABOVE
// console.log(modelVariants.availableVariants[2]);

// PRINTS OUT RANDOM NUMBER
let x = Math.floor(Math.random() * 10);
console.log("RANDOM NUM --> " + x);

        // CHANGES VARIANT VIA TIME OUT + RANDOM NUM GENERATOR

        // setTimeout(() => {

        //     modelVariants.variantName = modelVariants.availableVariants[1];
        //     console.log("This is the current Model-Variant: " + modelVariants.variantName);
        // },
        // 5000
        // );

    // });





