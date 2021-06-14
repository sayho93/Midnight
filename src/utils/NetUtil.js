import axios from 'axios';
import Configs from './Configs';

const NetUtil = {
    login: (email, pw) => {
        console.log(Configs.API_POST_LOGIN);
        console.log(email);
        console.log(pw);
        let params = new URLSearchParams();
        params.append('email', email);
        params.append('pwd', pw);
        return axios
            .post(Configs.API_POST_LOGIN, params)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    },
    getBoard: id => {
        console.log(`${Configs.API_GET_BOARD}${id}`);
        return axios
            .get(`${Configs.API_GET_BOARD}${id}`)
            .then(response => {
                console.log(response.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    },
};

export default NetUtil;
