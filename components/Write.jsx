import { useEffect } from 'react';
import axios from 'axios';

const Write = () => {
    useEffect(() => {
        const imageId = '1';

        axios
            .get(`http://3.36.127.43:8080/${imageId}/comments`)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    return null;
};

export default Write;
