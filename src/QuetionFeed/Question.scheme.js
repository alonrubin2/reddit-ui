import * as yup from 'yup';


export const questionScheme = yup.object().shape({
    title: yup.string()
           .required("Please submit a title"),
    question: yup.string()
})