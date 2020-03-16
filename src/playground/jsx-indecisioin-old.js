//JSX
//JavaScript XML

/* let user = {
    name: 'Ivanko',
    age: 37,
    location: ''
} */

let appObject = {
    title: 'This is title',
    subtitle: 'This is subtitle',
    options: []
}

let userName = 'Ivanko'
let userAge = 37
let userLocation = 'New York'

const onFormSubmit = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value

    if (option) {
        appObject.options.push(option)
        e.target.elements.option.value = ''
        renderPage()
    }
}

const removeAll = () => {
    appObject.options = []
    renderPage()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * appObject.options.length)
    const option = appObject.options[randomNum]
    console.log(option)
    alert(option)
}

const renderPage = () => {
    const template =
        <div>
            <h1>{appObject.title}</h1>
            {appObject.subtitle && <p>{appObject.subtitle}</p>}
            <p>{appObject.options.length > 0 ? `Here are your options:` : 'No options'}</p>
            <button disabled={appObject.options.length === 0} onClick={onMakeDecision}>What should I do</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {appObject.options.map((option) => <li key={option}>{option}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Options</button>
            </form>

        </div>

    ReactDOM.render(template, appRoot)
}



/* let getLocation = (location) => location ? <p>Location: {location}</p> : undefined

let templateTwo = 
    <div>
        <h1>{user.name}</h1>
        {user.age >= 37 && <p>Age:{user.age} </p>}
	    <p>Location: {user.location ? user.location : 'Unknown'}</p>
	    {getLocation(user.location)}
    </div>   */


//--------------------------------------------



let appRoot = document.getElementById('app')
renderPage()
