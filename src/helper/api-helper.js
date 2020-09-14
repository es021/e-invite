import axios from 'axios';
import { ServerRoot } from '../config/app-config';
const qs = require('qs');

export function axiosGet(url) {
    return axios.get(url);
};

export function phpRequest(script, params) {
	var requestUrl = ServerRoot + `${script}.php`;
	var config = {
		proxy: false
	};
	return axios.post(requestUrl, qs.stringify(params), config);
}