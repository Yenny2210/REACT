import React, { useState } from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';
export function App() {
    const [name, setName] = useState('midudev')

    console.log('render with name: ', name)

    return (
        <section className='App'>
            <TwitterFollowCard userName={name}>
                Yenny Durango
            </TwitterFollowCard>
            <TwitterFollowCard userName="minuto30">
                Minuto 30 Noticias
            </TwitterFollowCard>
            <TwitterFollowCard userName="petroski">
                Petro Presidente
            </TwitterFollowCard>

            <button onClick={() => setName('pedromichel')}>
                Cambiar nombre
            </button>
        </section>
    )
}