import { useState } from 'react';

function Form() {
    const [form, setForm] = useState({ name: "", email: "" });
    const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    console.log(form);
    };

    const onChange = (event) => {
        console.log("Changed input field");
        const name = event.target.name;
        const value = event.target.value;

        console.log(`event.target.name: ${name}, event.target.value: ${value}`);

        setForm({ ...form, [name]: value });

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={onChange} placeholder="Name (e.g. John)"/>
            <input type="email" name="email" onChange={onChange} placeholder="Email (e.g. raul@example.com)"/>
            <button type="Submit">Submit form</button>
        </form>
    )
}

export default Form;