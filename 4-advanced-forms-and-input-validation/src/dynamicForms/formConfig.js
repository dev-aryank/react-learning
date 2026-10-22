export const SIGN_IN_FORM_CONFIG = [
    {
        id: "username",
        name: "username",
        label: "Username",
        placeholder: "e.g. aryank",
        defaultValue: "aryank",
        type: "text"
    },
    {
        id: "email",
        name: "email",
        label: "Email",
        placeholder: "hello@aryank.dev",
        defaultValue: "hello@aryank.dev",
        type: "email"
    },
    {
        id: "password",
        name: "password",
        label: "Password",
        placeholder: "Strong Password",
        type: "password"
    },

];

export const SIGN_UP_FORM_CONFIG = [
    {
        id: "username",
        name: "username",
        label: "Username",
        placeholder: "e.g. aryank",
        defaultValue: "",
        type: "text"
    },
    {
        id: "email",
        name: "email",
        label: "Email",
        placeholder: "hello@aryank.dev",
        defaultValue: "",
        type: "email"
    },
    {
        id: "password",
        name: "password",
        label: "Password",
        placeholder: "Strong Password",
        type: "password"
    },
    {
        id: "confirmPassword",
        name: "confirmPassword",
        label: "Confirm Password",
        placeholder: "Re-enter you Password",
        type: "password"
    },
    {
        id: "gender",
        name: "gender",
        label: "Gender",
        placeholder: "",
        type: "radio",
        options: [
            {
                label: "Male",
                value: "male"
            },
            {
                label: "Female",
                value: "female"
            },
            {
                label: "Others",
                value: "others"
            }
        ]
    },
    {
        id: "country",
        name: "country",
        label: "Country",
        placeholder: "",
        type: "select",
        options: [
            {
                label: "India",
                value: "india"
            },
            {
                label: "USA",
                value: "usa"
            },
            {
                label: "Canada",
                value: "canada"
            }
        ]
    },
    {
        id: "hobbies",
        name: "hobbies",
        label: "Hobbies",
        placeholder: "",
        type: "checkbox",
        options: [
            {
                label: "Sports",
                value: "sports"
            },
            {
                label: "Reading",
                value: "reading"
            },
            {
                label: "Coding",
                value: "coding"
            },
            {
                label: "Cooking",
                value: "cooking"
            }
        ]
    },
];