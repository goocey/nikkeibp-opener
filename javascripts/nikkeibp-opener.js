// ==UserScript==
// // @name           nikkeibp-opener
// // @match          http://www.nikkeibp.co.jp/article/news/*
// // ==/UserScript==
function addJQuery(callback) {
    var script = document.createElement("script");
    script.setAttribute("src",
                        "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
    script.addEventListener('load', function() {
        var script = document.createElement("script");
        script.textContent = "(" + callback.toString() + ")();";
        document.body.appendChild(script);
    }, false);
    document.body.appendChild(script);
}

// the guts of this userscript
function main() {
    url = $('div.readmore').children().attr('href').toString();
    document.location = url;
};

// load jQuery and execute the main function
addJQuery(main);
