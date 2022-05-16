
const formID = 'OuA5lCQA';
const formSparkURL = `https://submit-form.com/${formID}`;
const axios = require('axios');
export const submitForm = async (event, data) => {
    event.preventDefault();
    await formSubmission(data);
}

export const formSubmission = async (payload) => {
   

    try {
        console.log("sending");

        const result = await axios.post(formSparkURL, payload);
    } catch (error) {
        console.log(error)
    }
}
