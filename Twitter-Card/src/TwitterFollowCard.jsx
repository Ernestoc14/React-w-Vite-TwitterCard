import { useState } from "react";

export function TwitterFollowCard({userName = 'unknown', children}) {
    
    const [isFollowing, setIsFollowing] = useState(false)
    
    const text = isFollowing ? 'Following' : 'Follow'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    
    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }

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
            <button className={buttonClassName} onClick={handleClick}>
                {text}
            </button>
        </aside>
    </article>
    );
}