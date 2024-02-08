
export function TwitterFollowCard({userName, name, isFollowing}) {
    const imageSrc = `https://unavatar.io/${userName}`

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={imageSrc} alt="Avatar persona}" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-boton'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}