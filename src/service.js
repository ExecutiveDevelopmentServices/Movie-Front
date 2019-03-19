import axios from 'axios';
import history from './history';

const url = process.env.REACT_APP_API_URL;

if (!url) {
    throw new Error('API Url is not provided.');
}

const apiGateWay = axios.create({
    baseURL: url,
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json',
    }
});
apiGateWay.interceptors.response.use(res => res
    , (res) => {
        console.log("response: ", res)
        if (res.response && res.response.status === 422) {
            localStorage.clear();
            history.push('/signin');
        }
        return res;
    });
apiGateWay.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    config.headers['x-auth-token'] = `${token}`;
    return config;
});

export default apiGateWay;


const autheticateGateway = axios.create({
    baseURL: 'http://localhost:3000/auth/',
    timeout: 20000,
});

export {autheticateGateway, apiGateWay};




