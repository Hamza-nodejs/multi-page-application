import axios from 'axios';

const apiHelper = async ({
    endpoint,
    method = 'GET',
    headers = {},
    body = null,
    authToken = null,
    params = null,
    timeout = 50000,
}) => {
    try {
        if (authToken) {
            headers = {
                ...headers,
                Authorization: `Bearer ${authToken}`,
            };
        }

        const response = await axios({
            url: endpoint,
            method,
            headers,
            data: body,
            params,
            timeout,
        });

        return response.data;
    } catch (error) {
        if (error.response) {
            return {
                success: false,
                status: error.response.status,
                message: error.response.data.message || 'Something went wrong',
                data: error.response.data || null,
            };
        } else if (error.request) {
            return {
                success: false,
                status: null,
                message: 'No response received from the server',
                data: null,
            };
        } else {
            return {
                success: false,
                status: null,
                message: error.message || 'Unexpected error occurred',
                data: null,
            };
        }
    }
};

export default apiHelper;
