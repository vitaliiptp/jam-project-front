import React from 'react';
import './Follow.css'
import { BsHeartFill } from 'react-icons/bs';
import { BsHeart } from 'react-icons/bs';


export default function Follow() {
    const [isFavorite, handleClickFavorite] = React.useState(false);

    return (
            <div value={isFavorite} onClick={() => handleClickFavorite(!isFavorite)}>
                
                {isFavorite === false ?
                    <BsHeart className="notFavorite" /> : 
                    <BsHeartFill className="isFavorite" />
                }
            </div>
    )
}
