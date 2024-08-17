import React from 'react';

import backgroundImage from '../../bgImages/home.jpg';

const HomePage = () => {
    return (
        <div style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            minHeight: '100vh',
            opacity: 0.8 // Adjust transparency
        }}>
    
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, fuga aspernatur. Excepturi labore itaque placeat ullam? Eligendi necessitatibus magnam nostrum consectetur a vitae soluta ad facere, delectus enim, repudiandae esse!
          Soluta maxime ad qui, in aut, autem provident earum eveniet non perspiciatis ea ipsum necessitatibus nulla obcaecati consequatur harum molestias neque fugit, distinctio eligendi pariatur. Beatae repellat est esse eveniet.
          Magni provident atque ipsum delectus ducimus corporis impedit saepe at, natus porro quia veritatis nihil, laudantium sint voluptatum autem deserunt illum ea! Dolore, saepe aut molestias amet inventore cupiditate expedita.
          Error modi illo animi, laborum vero alias autem, veniam tempore dignissimos optio inventore deserunt veritatis debitis provident libero in explicabo, quod ducimus repellendus! Odit quisquam ea maxime vitae quos animi!


     </div>

    );
};

export default HomePage;
