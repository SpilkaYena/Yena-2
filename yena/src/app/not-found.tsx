import React from 'react';

const NotFoundImage = 'https://i.pinimg.com/originals/30/c6/62/30c6621320ac5d6755542822ac761a4b.jpg';

function NotFound() {
    return (
        <div>
            <img src={NotFoundImage} alt='not-found' style = {{height:'50vw',width:'100%', margin:'0 auto'}}/>
        </div>
    );
}

export default NotFound;
