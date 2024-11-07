// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TelaInicial from './TelaInicial'; // Importe o componente da tela inicial

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={TelaInicial} /> {/* Rota inicial */}
                {/* Adicione outras rotas aqui, se necessário */}
            </Switch>
        </Router>
    );
}

export default App;