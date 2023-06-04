export function Greeting({ title, name = "User" }) {
    return (
        <h1>
            {title}, dice {name}
        </h1>
    );
}

export function UserCard({ name, amount, married, address, greet }) {
    return (
        <div>
            <h1>{name}</h1>
            <p>💲{amount}</p>
            <p>{married ? "Married" : "Single"}</p>
            <ul>
                <li>Street: {address.street}</li>
                <li>City: {address.city}</li>
            </ul>
        </div>
    );
}
