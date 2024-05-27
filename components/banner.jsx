import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Banner() {
    const [postCount, setPostCount] = useState(0);

    useEffect(() => {
        axios
            .get('http://3.36.127.43:8080/imageSize')
            .then((res) => {
                setPostCount(res.data.count);
            })
            .catch((e) => {
                console.log('Error:', e);
            });
    }, []);

    return (
        <>
            <h3>likelion_12th_fronted</h3>
            <p>멋쟁이사자처럼 12기 여러분 화이팅! 어른사자로 폭풍성장하세요</p>
            <p>게시물 개수: {postCount}</p>
        </>
    );
}
