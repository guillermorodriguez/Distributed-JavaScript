[
    'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js',
    'https://code.jquery.com/jquery-3.3.1.slim.min.js', 
    'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js', 
    'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css', 
    'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js',
    './authenticate.js'
].forEach(bootstrap_resources);

// Instantiate Each JavaScript Library Reference
function bootstrap_resources(item, index, array){ 
    var tag = null;
    var typeOf = item.split('.')[item.split('.').length -1];

    if( typeOf == 'js' ){
        // JavaScript Resource
        tag = document.createElement('script');
        tag.type = 'text/javascript';
        tag.src = item;
        tag.async = false;
    }
    else if( typeOf == 'css' ){
        // CSS Resource
        tag = document.createElement('link');
        tag.rel = 'stylesheet';
        tag.href = item;
        tag.async = true;
    }
    
    if ( tag ){ document.getElementsByTagName('head')[0].appendChild(tag); }
}