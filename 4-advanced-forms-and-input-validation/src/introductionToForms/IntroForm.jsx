import { useActionState } from "react";

const IntroForm = () => {

    

    // The initial action state supplies the values used to prefill the form.
    const initState = {
        firstName: "Aryank",
        email: "hello@aryank.dev",
        password: "aryan",
        gender: "male",
        country: "india",
        hobbies: ["sports", "reading"]
    }

    // useActionState returns the latest state, a form action to pass to <form>,
    // and a pending flag that can be used while the async action is running.
    const [state, action, isPending] = useActionState(formSubmitted, initState)

    async function formSubmitted(prevData, formData){
        // The action receives its previous state and the submitted form fields.
        console.log(prevData, Object.fromEntries(formData));
        console.log("Submitting....");

        await new Promise((resolve) => setTimeout(resolve, 4000));

        // Object.fromEntries keeps one value per name, so use getAll for the
        // checkboxes that share the "hobbies" name.
        let data = Object.fromEntries(formData);
        const allHobbies = formData.getAll("hobbies");
        data = {...data, hobbies:allHobbies};
        
        
        console.log("Submitted successfully", data);

        // The returned value becomes the next state exposed by useActionState.
        return {};
    }

    function handleInputUpdate(e){
        const {name, value} = e.target;
        console.log(name, value)
    }

    return (
    <form action={action}>
        <label>
            First Name
            <input type="text" name="firstname" placeholder="e.g. Aryan" onChange={handleInputUpdate} defaultValue={state.firstName}/>
        </label>
        
        <br />
        <label>
            Email
            <input type="email" name="email" placeholder="e.g. hello@aryank.dev" onChange={handleInputUpdate} defaultValue={state.email}/>
        </label>

        <br />
        <label>
            Password
            <input name="password" type="password" defaultValue={state.password}/>
        </label>

        <br />
        <label>
            Gender
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    defaultChecked={state.gender === "male"} />
                Male
            </label>
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    defaultChecked={state.gender === "female"} />
                Female
            </label>
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="others"
                    defaultChecked={state.gender === "others"} />
                Others
            </label>
        </label>

        <br />
        <label>
            Select a Country
            <select name="country" defaultValue={state.country}>
                <option value="">Choose a country</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="canada">Canada</option>
            </select>
        </label>

        <br />
        <label>
            Hobbies
            <label>
                <input type="checkbox" name="hobbies" value="sports" defaultChecked={state.hobbies?.includes("sports")}/>
                Sports
            </label>
            <label>
                <input type="checkbox" name="hobbies" value="reading" defaultChecked={state.hobbies?.includes("reading")}/>
                Reading
            </label>
            <label>
                <input type="checkbox" name="hobbies" value="cooking" defaultChecked={state.hobbies?.includes("cooking")}/>
                Cooking
            </label>
        </label>

        <br />
        <button type="submit" disabled={isPending}>Submit</button>
        <button type="reset">Reset</button>
        
    </form>
    );
};

export default IntroForm
