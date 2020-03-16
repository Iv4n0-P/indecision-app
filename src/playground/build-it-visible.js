
class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props)
        this.changeShow = this.changeShow.bind(this)
        this.state = {
            show: false
        }
    }

    changeShow() {
        this.setState((prevState) => {
            return {
                show: !prevState.show
            }
        })
    }

    render() {
    return (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.changeShow}>{this.state.show? 'Hide details!' : 'Show Details!'}</button>
            {this.state.show && <p>Some details!</p>}
        </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

/* let show = false

const changeShow = () => {
    show = !show
    renderDOM()
}

const renderDOM = () => {

    const template3 =
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={changeShow}>{show? 'Hide details!' : 'Show Details!'}</button>
            {show && <p>Some details!</p>}
        </div>

    ReactDOM.render(template3, document.getElementById('app'))
}

renderDOM() */