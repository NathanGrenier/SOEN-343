import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function Root() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div className="flex items-center max-w-2xl mx-auto">
            <label className="text-custom-blueishGray text-xl mr-5">Rating:</label>
            {Array.from({ length: 5 }).map((_, index) => {
                const currentRating = index + 1;
                return (
                    <label key={index}>
                        <input 
                            type="radio" 
                            name="rating" 
                            value={currentRating} 
                            style={{ display: 'none' }} 
                            onClick={() => setRating(currentRating)}
                        />
                        <FaStar 
                            style={{ cursor: 'pointer' }}
                            color={currentRating <= (hover || rating) ? "#A9F5A1" : "lightgrey"} 
                            size={35} 
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(0)}
                        />
                    </label>
                );
            })}
        </div>
    );
}
