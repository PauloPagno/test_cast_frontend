import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

import api from '../../services/api'


import padlock from '../../assets/padlock.png'

export default function Login() {

        const [username, setUsername]  = useState('');
        const [password, setPassword]  = useState('');

        const history = useHistory();

        async function login(e) {
            e.preventDefault();

            const data = {
                username,
                password,
            };

            try {
                history.push('/curso')

            }
                catch (err){
                    alert('Erro de Login');
                }
            

        };

    return(      
        <div className="login-container">
            <section className="form">
                <form onSubmit={login}>
                    <h1>Acesso</h1>
                    <input 
                        placeholder="Nome"
                        valeu={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input 
                    type="password" placeholder="Senha"
                    valeu={password}
                    onChange={e => setPassword(e.target.value)}
                    />

                    <button className="button" type="submit">Login</button>

                </form>

            </section>

            <img src={padlock} alt="Login"/>
          

        </div>        
    )
}