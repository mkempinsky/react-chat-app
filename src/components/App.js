import React, {Component} from 'react';
import './App.css';
import env from '../env';

class App extends Component {
    render() {
        console.log('firebaseurl', env.FIREBASE_API_URL);
        return (
            <div className="App">
                <p>hello</p>
            </div>
        );
    }
}

export default App;
