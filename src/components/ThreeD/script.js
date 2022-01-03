
// ! PROBLEM IS THAT THE MODEL FIRST NEEDS ...
// ! TO BE LOADED BEFORE ANY OF THE SCRIPT SEQUENCES BELOW CAN WORK
// ! 


// window.onload = function () {

    // THIS SETS A VARIABLE TO ROOSTER MODEL
    // const modelVariants = document.querySelector("model-viewer#rooster");
    // const modelRandomizer = document.querySelector("ModelContainer#randomTextureBtn")

    // THIS TESTS TO SEE IF MODEL IS DOWNLOADED.
    // modelVariants.addEventListener("load", function () {

        // MESSAGE CONFIRMING DOWNLOADED MODEL
        // console.log("MODEL HAS FINISHED DOWNLOADING!");

        // PRINTS TO SEE IF MODEL HAS BEEN LOADED ONTO PAGE
        // modelVariants.addEventListener("model-visibility", function () {

            // MESSAGE CONFIRMING MODEL LOADED ONTO PAGE
            // console.log("MODEL HAS FINISHED LOADING TO SITE!");

            // if (modelVariants.modelIsVisible === true) {

                // console.log("HAS MODEL BEEN LOADED? -> " + modelVariants.modelIsVisible);

                // PRINTS OUT MODEL ELEMENT HTML
                // console.log("MODAL HTML -> " + modelVariants);

                // LISTS TOTAL AMOUNT OF VARIANTS
                // console.log("TOTAL AMOUNT OF MODEL TEXTURE VARIANTS -> " + modelVariants.availableVariants.length);

                // LISTS ALL VARIANTS (ARRAY)
                // console.log("LIST OF MODEL TEXTURE VARIANTS -> " + modelVariants.availableVariants);

                // EXAMPLE - PRINTS OUT THE 2 ELEMENT WITHIN VARIANT ARRAY ABOVE
                // console.log(modelVariants.availableVariants[2]);

                // PRINTS OUT RANDOM NUMBER
                // let x = Math.floor(Math.random() * 10);
                // console.log("RANDOM NUM --> " + x);

                // SETS NEW TEXTURE TO MODEL
                // modelVariants.variantName = modelVariants.availableVariants[x];

                // modelRandomizer.addEventListener("onClick", () => {
                //     console.log("YOU CLICKED ME!");
                // })


                // THIS WILL PRINT ERROR MESSAGE WHEN MODEL FAILED TO LOAD (SETUP POSTER) 
            // } else if (modelVariants.modelIsVisible === null) {
                // console.log("what the fuck");
            // }

        // })




    // });
// };

















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
// let x = Math.floor(Math.random() * 10);
// console.log("RANDOM NUM --> " + x);

        // CHANGES VARIANT VIA TIME OUT + RANDOM NUM GENERATOR

        // setTimeout(() => {

        //     modelVariants.variantName = modelVariants.availableVariants[1];
        //     console.log("This is the current Model-Variant: " + modelVariants.variantName);
        // },
        // 5000
        // );

    // });





