export function TwitterFollowCard({userName = 'unknown', children, isFollowing}) {
    return (
    <article className="tw-followCard">
    <header className="tw-followCard-header">
        <img
        className="tw-followCard-avatar"
        src={`https://unavatar.io/${userName}`}
        alt="El avatar de Midudev"
        />
        <div className="tw-followCard-info">
            <strong>{children}</strong> 
            <span className="tw-followCard-username">@{userName}</span>
        </div>
    </header>

        <aside>
            <button className="tw-followCard-button">
                Follow
            </button>
        </aside>
    </article>
    );
}
