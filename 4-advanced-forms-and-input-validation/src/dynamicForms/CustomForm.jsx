import { useState } from "react"
import FormInput from "./FormInput"

const CustomForm = ({config, onSubmit, isPending}) => {
    const initData = config.reduce((acc, field) => {
        acc[field.name] = field.defaultValue || "";
        return acc;
    }, {});

    const [data, setData] = useState(initData);
    const [errors, setErrors] = useState({});

    function handleInputUpdate(e){
        const {name, value} = e.target;
        const newData = {...data, [name]:value};
        setData(newData);
        
        const field = config.find(item => item.name === name);
        const message = field.validate(value, data);
        if(message){
            setErrors(prevError => {
                return {...prevError, [name]: message};
            })
        } else{
            setErrors(prevError => {
                return {...prevError, [name]: undefined};
            })
        }

        console.log(newData);
    }

    function handleFormSubmit(e){
        e.preventDefault();

        const newErrors = {};
        config.forEach(item => {
            const name = item.name;
            const value = data[name]
            const err = item.validate && item.validate(value, data);
            if(err){
                newErrors[name] = err;
            }
        });

        setErrors(newErrors);
        if(Object.keys(newErrors).length === 0){
            onSubmit(data);
            setData(initData);
            console.log("Success", data);
        }
        else{
            console.log("Errors are here", newErrors);
        }

        
        
    }

    return (
        <form onSubmit={handleFormSubmit}>
            {config.map(item => <FormInput key={item.id} value={data[item.name]} onChange={handleInputUpdate} {...item} error={errors[item.name]} />)}
            <button disabled={isPending} type="submit">Submit</button>
        </form>
    )
}

export default CustomForm
