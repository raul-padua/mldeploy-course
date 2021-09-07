import { useState } from "react";

function User(props) {
    console.log(props);

    return (
        <h1>Name: {props.name} - Age: {props.age} <button onClick={props.function}> Click Me </button> </h1>
    );
}

function SecondUser() {
    const [counter, serCounter] = useState(0);
    const increment = () => {
        // update state of the component
        serCounter(counter + 1);
    }
    return (
        <div>
            <h1>Second user data here</h1>
            <button onClick={increment}>Click Me</button>
            <p>You clicked the button {counter} times.</p>
        </div>
    )
}

export { User, SecondUser };