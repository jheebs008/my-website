import React from 'react';
import Header from './components/header/header';
import Body from './components/body/body';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Body />
            </div>
        );
    }
}

export default App;
