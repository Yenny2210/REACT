import React from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';
export function App() {
    const addAt = (userName)
    return (
        <React.Fragment>
            <TwitterFollowCard isFollowing userName="yennydurango" name="Yenny Durango" />
            <TwitterFollowCard isFollowing={false} userName="impact" name="Impacto" />
            <TwitterFollowCard isFollowing userName="caracol" name="Caracol" />
            <TwitterFollowCard isFollowing userName="minuto30" name="Minuto 30" />
        </React.Fragment>

    )
}