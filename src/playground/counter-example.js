class Counter extends React.Component {

    constructor (props) {
        super(props)
        this.addOne = this.addOne.bind(this)
        this.minusOne = this.minusOne.bind(this)
        this.reset = this.reset.bind(this)
        this.state = {
            count: 0
        }
    }

    componentDidMount () {
        try {
            const json = localStorage.getItem ('count')
            const count = JSON.parse(json)
    
            if (!isNaN(count) {
            this.setState (() => ({count}) )
            }
        } catch (e) {
            //Do nothing at all
        } 
        
      }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            const json = JSON.stringify(this.state.count)
            localStorage.setItem('count', json)
        }

    }  
    
    addOne () {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    minusOne () {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
    
    reset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }   

    render () {
        return (
            <div>
                <h1>Count: {this.state.count} </h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'))



/* //--------------------------------------------
let count =  0

const addOne = () => {
    count++
    renderDOM ()
}

const minusOne = () => {
    count--
    renderDOM ()
}
    
const reset = () => {
    count=0
    renderDOM ()
}

const renderDOM = () => {

    const template3 = 
    <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>Reset</button>
    </div>
    
    ReactDOM.render(template3, appRoot)
}




//--------------------------------------------

let appRoot = document.getElementById('app')
renderDOM () */