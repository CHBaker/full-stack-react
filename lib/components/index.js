import React from 'react'
import ReactDOM from 'react-dom';
import "core-js/stable";
import "regenerator-runtime/runtime";

class App extends React.Component {
    state = {
        answer: 42,
    }

    asyncFunc = () => {
        return Promise.resolve(37)
    }

    async componentDidMount() {
        this.setState({
            answer: await this.asyncFunc()
        })
    }

    render() {
        return (
            <h2>Class Component -- {this.state.answer}</h2>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)