export function loggerInterceptor(req) {
    console.log('I am Logger Interceptor');
    if(!req.skipLogger){
        console.log(`${req.method} ${req.url}  is triggered at ${new Date().toLocaleTimeString()}`)
    }
    return req;
}