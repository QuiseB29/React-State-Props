import { Component } from  'react';
import './Profile.css';

class ClassProfile extends Component {

    constructor() {
        super()
        this.state = {
            name: 'Angel'
        }
        
        this.changeName = this.changeName.bind(this)

    }

    changeName() {
        this.setState({ name: "Charlie"})
    }

    render() {
        const name = this.state.name;

        return (
            <div>
                <p className='profile'>Hello, {name}! This is a User-Profile</p>

                <button onClick={this.changeName}>Change Name</button>
            </div>
        )
    }
}

export default ClassProfile
