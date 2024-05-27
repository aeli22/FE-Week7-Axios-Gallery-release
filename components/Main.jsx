import React, { useEffect, useState } from 'react';
import Banner from './banner';
import axios from 'axios';
import Card from './Card';

const Main = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios
            .get('http://3.36.127.43:8080/imageAll')
            .then((res) => {
                setCards(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <Banner />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {cards.map((card) => (
                    <Card key={card.id} img={card.img} name={card.name} id={card.id} />
                ))}
            </div>
        </>
    );
};

export default Main;
