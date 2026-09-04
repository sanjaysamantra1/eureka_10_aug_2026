import React, { Component, PureComponent } from 'react'

// export default class PureDemo1 extends Component {
export default class PureDemo1 extends PureComponent {
    constructor() {
        super();
        this.state = { name: 'Sai' }
    }
    updateName = () => {
        this.setState({ name: 'Sai' })
    }
    render() {
        console.log('Component loads...')
        return <>
            <div>This is PureDemo1 Component</div>
            <div>Name: {this.state.name}</div>

            <button onClick={this.updateName}>Update Name</button>
        </>
    }
}
