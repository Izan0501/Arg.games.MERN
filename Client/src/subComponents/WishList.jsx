import React from 'react'

export const WishList = () => {
    return (
        <>
            <div class="btn-group">
                <button
                    id="wish-btn"
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                    </svg>
                </button>
                <ul id="wish-menu" class="dropdown-menu">
                    <li>

                    </li>
                </ul>
            </div>
        </>
    )
};

export default WishList
