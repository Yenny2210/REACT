
export function TwitterFollowCard({ formattedUserName, userName, name, isFollowing }) {

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar'
                    src={`https://unavatar.io/${userName}`}
                    alt="Avatar persona}"
                />

                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span>
                        {formattedUserName}
                    </span>
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