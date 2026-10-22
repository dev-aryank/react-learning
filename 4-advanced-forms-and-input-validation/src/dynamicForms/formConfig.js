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
        type: "text",
        validate: (val) => {
            if(!val) return "Username is required!";
            if(val.length < 4) return "Username should be of atleast length 4!";
            return null; 
        }
    },
    {
        id: "email",
        name: "email",
        label: "Email",
        placeholder: "hello@aryank.dev",
        defaultValue: "",
        type: "email",
        validate: (val) => {
            if(!val) return "Email is required!";
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailRegex.test(val)) return "Email is not valid!"
            return null;
        }
    },
    {
        id: "password",
        name: "password",
        label: "Password",
        placeholder: "Strong Password",
        type: "password",
        validate: (val) => {
            if(!val) return "Password is required!";
            if(val.length < 8) return "Password should be of atleast length 8!";
            return null;
        }
    },
    {
        id: "confirmPassword",
        name: "confirmPassword",
        label: "Confirm Password",
        placeholder: "Re-enter you Password",
        type: "password",
        validate: (val, formData) => {
            if(val === formData.password) return null;
            return "Passwords does not much";
        }
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
        ],
        validate: (val) => {
            if(val) return null;
            return "Please select a Gender."
        }
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
        ],
        validate: (val) => {
            if(val) return null;
            return "Please select a Country."
        }
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
        ],
        validate: (val) => {
            if(val && val.length > 0) return null;
            return "Please select atleast one Hobby."
        }
    },
];