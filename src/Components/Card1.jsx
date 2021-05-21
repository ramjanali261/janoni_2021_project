import React from 'react';
import Card2 from './Card2';
import Card_Data from './Card_Data';

const Card1 = () => {

    function ncard(val) {
        return (<Card2
            title={val.title}
            about={val.about}
        />);
    }

    return (
        <>
            {Card_Data.map(ncard)}
        </>
    )
}

export default Card1;
