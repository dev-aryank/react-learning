import { useState } from "react"
import FormInput from "./FormInput"

const CustomForm = ({config, onSubmit}) => {
    const initData = config.reduce((acc, field) => {
        acc[field.name] = field.defaultValue || "";
        return acc;
    }, {});

    const [data, setData] = useState(initData);

    function handleInputUpdate(e){
        const {name, value} = e.target;
        const newData = {...data, [name]:value};
        setData(newData);
        
        console.log(newData);
    }

    function handleFormSubmit(e){
        e.preventDefault();
        onSubmit(data);
        setData(initData);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            {config.map(item => <FormInput key={item.id} value={data[item.name]} onChange={handleInputUpdate} {...item} />)}
            <button type="submit">Submit</button>
        </form>
    )
}

export default CustomForm
