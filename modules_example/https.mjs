import {send } from './request.mjs';
import {read } from './response.mjs';

function requests (url, data){
    send(url, data);
    return read();
}
requests('https://www.google.com', 'data');