import {
    HOST,
    LAUNCHES_ENDPOINT,
    VERSION,
} from '../../../constants/ApiConstants';
import axios, { AxiosPromise } from 'axios';

export default function getLaunchesCall(
    params: GetLaunchesParams = {}
): AxiosPromise {
    const endpoint = [HOST, VERSION, LAUNCHES_ENDPOINT].join('/');
    return axios
        .get(endpoint, { params })
        .then(({ data }) => data)
        .catch((error) => {
            throw error;
        });
}
