export function errorHandler(error) {
    console.log('Error Interceptor called...')
    const status = error.response?.status;
    if (status === 401) {
        window.location.assign('/login');
    }
    if (status === 403) {
        console.error('You do not have Permission for this action')
    } else if (status >= 500) {
        console.error('Server Error, Please try again later.')
    } else if (status >= 500) {
        console.error('Server Error, Please try again later.')
    } else if (!error.response) {
        console.error('Network Error or Request timed out')
    }
    return Promise.reject(error);
}