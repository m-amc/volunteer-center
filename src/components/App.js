import React from 'react';
import Main from './Main';
import { useAuth0 } from "../react-auth0-wrapper";
import Loading from './Loading';

function App() {
    const { loading } = useAuth0();
    
    if (loading) {
        return <Loading />;
    }

    return <Main />
}

export default App;