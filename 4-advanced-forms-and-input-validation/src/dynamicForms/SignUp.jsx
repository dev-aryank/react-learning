import CustomForm from "./CustomForm"
import { SIGN_UP_FORM_CONFIG } from "./formConfig"


const SignUp = () => {

    function handleSignUpForm(data){

    }

    return (
        <div>
            <h1>Sign Up</h1>
            <CustomForm config={SIGN_UP_FORM_CONFIG} onSubmit={handleSignUpForm}/>
        </div>
    )
}

export default SignUp
