import React from 'react';
import './App.css';
import AppBarComponent from './components/Header/AppBarComponent';
import GridMenuComponent from './components/GridMenu/GridMenuComponent';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <AppBarComponent />
                <GridMenuComponent />
            </header>
        </div>
    );
}

export default App;
