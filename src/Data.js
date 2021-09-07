import { useState } from 'react';

function Data() {
    const [user, setUser] = useState(null);

    const getData = () => {
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setUser(data.results[0]);
            })
    }

    return (
        <div>
            <button onClick={getData}>fetch data</button>
            {user ? <p>{user.name.first} {user.name.last}- {user.email}</p> : <p>User not found</p>}
        </div>
    )
};

export default Data;