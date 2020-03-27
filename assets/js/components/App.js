import React, { useState } from 'react';

const App = () => {
    const [isLiked, setIsLiked] = useState(false);

    const handleClick = () => setIsLiked(!isLiked);

    return(
        <button onClick={handleClick}>
            {isLiked ? " Je n'aime plus!" : " J'aime!"}
        </button>
    )
}

export default App
