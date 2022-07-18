import * as config from '../config/api';
import axios from './axios';

const getCurrentDate = async () => {
    try {
        const response = await axios.get(
            `${config.apiConfig.baseUrl}/date`
        );
        // console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export { getCurrentDate };
