
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

import { AccessT} from './AccessToken';

class CatamelInterface{

    send_to_catamel(obj, api_descriptor) {
// construct an HTTP request
        const xhr = new XMLHttpRequest();
        const token = new AccessT();
        const access_token = token.access_token;

        const url = 'http://localhost:3000/api/v2/' + api_descriptor + '?access_token=' + access_token
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

        // send the collected data as JSON
        xhr.send(JSON.stringify(obj));


        xhr.onloadend = function () {
            console.log('DONE', xhr.readyState);
            console.log('xhr.status=', xhr.status);
            console.log('response=', xhr.responseText);
        };

        if (xhr.readyState == 4 || xhr.status == 200) {
            console.log('xhr.readyState=', xhr.readyState);
            console.log('xhr.status=', xhr.status);
            console.log('response=', xhr.responseText);

            var data = $.parseJSON(xhr.responseText);
            var uploadResult = data['message']
            console.log('uploadResult=', uploadResult);

            if (uploadResult == 'failure') {
                console.log('failed to upload file');
            } else if (uploadResult == 'success') {
                console.log('successfully uploaded file');
            }
        }
        return xhr;
    }

}


export { CatamelInterface};