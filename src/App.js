import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    state = { user: { firstName: '', lastName: '' } };

    componentDidMount() {
        fetch('https://app-dev-tyg-2.azurewebsites.net/users/?id=1')
            .then((res) => res.json())
            .then((user) => {
                this.setState({
                    user: {
                        firstName: user.FirstName,
                        lastName: user.LastName,
                    },
                });
            });
    }

    render() {
        const { firstName, lastName } = this.state.user;

        return (
            <div className='App'>
                <header className='App-header'>
                    <img src={logo} className='App-logo' alt='logo' />
                    <p>{`Hello ${firstName} ${lastName}!`}</p>
                    <a
                        className='App-link'
                        href='https://reactjs.org'
                        target='_blank'
                        rel='noopener noreferrer'>
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
