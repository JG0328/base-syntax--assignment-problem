import React, {Component} from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

    state = {
        username: 'jg0328'
    };

    usernameChangeHandler = (event) => {
        console.log('Change name...');
        this.setState({
            username: event.target.value
        });
    };

    render() {
        return (
            <div className="App">
                <UserInput changeMethod={this.usernameChangeHandler} initialValue={this.state.username}/>
                <UserOutput username={this.state.username}/>
            </div>
        );
    }
}

export default App;
