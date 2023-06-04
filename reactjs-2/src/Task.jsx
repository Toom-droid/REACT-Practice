import "./task.css";

export function TaskCard({ ready }) {
    return (
        <div className="card">
            <h1>Mi Primer Tarea</h1>
            <p>Tarea Realizada</p>
            <span
                className={ready ? 'green' : 'red'}
            >
                {ready ? "Tarea Realizada" : "Tarea Pendiente"}
            </span>
        </div>
    );
}
