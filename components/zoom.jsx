import React, { useEffect } from 'react';
import axios from 'axios';
import { styled } from 'styled-components';
import Write from './Write';

export default function Zoom() {
    useEffect(() => {
        const imageId = 1;
        axios
            .get('http://3.36.127.43:8080/{imageId}')
            .then((res) => {
                console.log(res);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);
}
