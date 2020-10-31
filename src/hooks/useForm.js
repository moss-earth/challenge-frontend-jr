import { useState } from 'react'

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState);

    const onChangeInput = (name, value) => {
    const newForm = {...form, [name]: value};
    
    setForm(newForm);
    }

    return [form, onChangeInput]
}
 
export default useForm
