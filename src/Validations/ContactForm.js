import * as yup from "yup"

export const newsletterSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
});

 