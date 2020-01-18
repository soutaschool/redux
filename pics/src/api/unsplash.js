import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
        'sasaki souta 32a4479d04cf66b7ab32527b9c932ba9459360b4fa82eb294fa2e8409d0be137'
    }
});