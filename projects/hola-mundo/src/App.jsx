import React from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';


export function App() {
    const formattedUserName = <span>@ola</span>

    return (
        <section className='App'>
            <TwitterFollowCard
                formattedUserName={formattedUserName}
                isFollowing
                userName="yennydurango"
                name="Yenny Durango"
            />

            <TwitterFollowCard
                formattedUserName={formattedUserName}
                isFollowing={false}
                userName="impact"
                name="Impacto"
            />

            <TwitterFollowCard
                formattedUserName={formattedUserName}
                isFollowing
                userName="caracol"
                name="Caracol"
            />

            <TwitterFollowCard
                formattedUserName={formattedUserName}
                isFollowing
                userName="minuto30"
                name="Minuto 30"
            />
        </section>
    )
}