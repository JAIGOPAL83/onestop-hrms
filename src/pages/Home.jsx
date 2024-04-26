import Header from "../components/Header";
import Info from "../components/Info";
import Section from "../components/Section";
import logo from './../logo.svg';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure({
    Auth: {
        Cognito: {
            region: process.env.REACT_APP_REGION,
            userPoolId: process.env.REACT_APP_USER_POOL_ID,
            userPoolClientId: process.env.REACT_APP_CLIENTID,
        }
    }
})

const Home = () => {
    return (
        <Authenticator>
            {({ signOut, user }) => (
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                        Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <main>
                            <h1>Hello User --- {user.username}</h1>
                            <button onClick={signOut}>Sign out</button>
                        </main>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            Learn React
                        </a>
                    </header>
                </div>
            )}
        </Authenticator>
    )
}

export default Home;