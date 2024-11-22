
function Form({onChangeName}) {
    const handleName = (ev) => {
        //console.log("La usuaria ha escrito en el input", ev.target.value);
        onChangeName(ev.target.value);

    }
    return (
        <form>
            <h2>Form</h2>
            <label>
                Nombre:
                <input type="text" onChange={handleName} />
            </label>
            <br />
            <label>
                Apellido:
                <input type="text" />
            </label>
        </form>
    )
}

export default Form