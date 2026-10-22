import { useActionState, useState } from "react";

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

    const emptyState = {
        firstName: "",
        email: "",
        password: "",
        gender: "male",
        country: "india",
        hobbies: ["cooking", "sports"]

    }
    const [data, setData] = useState(emptyState);

    function handleInputUpdate(e){
        const {name, value, type, checked} = e.target;

        if(type === "checkbox") {
            const newHobbies = checked ? [...data.hobbies, value] : data.hobbies.filter(item => item !== value);
            const newData = {...data, hobbies: newHobbies};
            setData(newData);
            console.log(newData);
            return;
        }

        const newData = {...data, [name]:value}
        setData(newData);

        console.log(newData);
    }

    function onFormSubmit(e){
        e.preventDefault();


        setData(emptyState);
        e.target.reset();
    }

    return (
    <form onSubmit={onFormSubmit}>
        <label>
            First Name
            <input type="text" name="firstName" value={data.firstName} placeholder="e.g. Aryan" onChange={handleInputUpdate} />
        </label>
        
        <br />
        <label>
            Email
            <input type="email" name="email" value={data.email} placeholder="e.g. hello@aryank.dev" onChange={handleInputUpdate} />
        </label>

        <br />
        <label>
            Password
            <input name="password" type="password" value={data.password} onChange={handleInputUpdate}/>
        </label>

        <br />
        <label>
            Gender
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={data.gender === "male"} 
                    onChange={handleInputUpdate}/>
                Male
            </label>
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={data.gender === "female"}
                    onChange={handleInputUpdate} />
                Female
            </label>
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="others"
                    checked={data.gender === "others"}
                    onChange={handleInputUpdate} />
                Others
            </label>
        </label>

        <br />
        <label>
            Select a Country
            <select name="country" value={data.country} onChange={handleInputUpdate}>
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
                <input type="checkbox" name="hobbies" value="sports" checked={data.hobbies?.includes("sports")} onChange={handleInputUpdate}/>
                Sports
            </label>
            <label>
                <input type="checkbox" name="hobbies" value="reading" checked={data.hobbies?.includes("reading")} onChange={handleInputUpdate}/>
                Reading
            </label>
            <label>
                <input type="checkbox" name="hobbies" value="cooking" checked={data.hobbies?.includes("cooking")} onChange={handleInputUpdate}/>
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
