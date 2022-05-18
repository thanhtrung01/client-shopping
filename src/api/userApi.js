import axiosClient from './axiosClient';

const userApi = {
	getAll: (params) => {
		const url = `/users`;
		// console.log('123', url);
		// return axiosClient.get(url, { params });
		return axiosClient.get(url);
	},

	get: (id) => {
		const url = `/user/${id}`;
		return axiosClient.get(url);
	},
	createUser: (params) => {
		const url = `/auth/register`;
		// console.log('params:', params);
		return axiosClient.post(url, params);
	},
	loginUser: (params) => {
		const url = `/auth/login`;
		// console.log('params:', params);
		return axiosClient.post(url, params);
	},
};

export default userApi;
