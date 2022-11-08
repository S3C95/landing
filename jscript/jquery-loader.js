(function(j,q,e,r,y){if(typeof(jQuery)=='undefined'){(q=j.createElement(q)).type='text/javascript';q.src='//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';e=j.getElementsByTagName(e)[0];q.onload=q.onreadystatechange=(function(){if(!r&&(!this.readyState||this.readyState=='loaded'||this.readyState=='complete')){r=true;y();q.onload=q.onreadystatechange=null;e.removeChild(q);}});e.appendChild(q);}else{y();}})(document,'script','head',false,(function(){
/* code goes here */
}));


// readable:
(function (j, q, e, r, y) {
    if (typeof(jQuery) == 'undefined') {
        (q = j.createElement(q)).type = 'text/javascript';
        q.src = '//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
        e = j.getElementsByTagName(e)[0];
        q.onload = q.onreadystatechange = (function () {
            if (!r && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
                r = true;
                y();
                q.onload = q.onreadystatechange = null;
                e.removeChild(q);
            }
        });
        e.appendChild(q);
    }
    else {
        y();
    }
})(document, 'script', 'head', false, (function () {
    /* code goes here */
}));