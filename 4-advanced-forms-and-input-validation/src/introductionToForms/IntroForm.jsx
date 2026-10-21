const IntroForm = () => {

    function formSubmitted(formData){
        let data = Object.fromEntries(formData);
        const allHobbies = formData.getAll("hobbies");
        data = {...data, hobbies:allHobbies};
        console.log(allHobbies)
        console.log(data);
    }

    function handleInputUpdate(e){
        const {name, value} = e.target;
        console.log(name, value)
    }

    return (
    <form action={formSubmitted}>
        <label>
            Name
            <input type="text" name="name" placeholder="e.g. Aryan" onChange={handleInputUpdate}/>
        </label>
        
        <br />
        <label>
            Email
            <input type="email" name="email" placeholder="e.g. hello@aryank.dev" onChange={handleInputUpdate} />
        </label>

        <br />
        <label>
            Password
            <input name="password" type="password" />
        </label>

        <br />
        <label>
            Gender
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="male" />
                Male
            </label>
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="female" />
                Female
            </label>
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="others" />
                Others
            </label>
        </label>

        <br />
        <label>
            Select a Country
            <select name="country">
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
                <input type="checkbox" name="hobbies" value="sports" />
                Sports
            </label>
            <label>
                <input type="checkbox" name="hobbies" value="reading" />
                Reading
            </label>
            <label>
                <input type="checkbox" name="hobbies" value="cooking" />
                Cooking
            </label>
        </label>

        <br />
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
        
    </form>
    );
};

export default IntroForm
