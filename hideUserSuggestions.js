// ==UserScript==
// @name         InstagramHideUserSuggestions
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide user suggestions on instagram
// @match        https://www.instagram.com/
// ==/UserScript==

(function() {
    'use strict';
    let target = document.querySelector('body');
    let config = {
        attributes: true,
        childList: true,
        subtree: true
    }

    let observer = new MutationObserver(removeSuggestions);

    observer.observe(target, config);

    function removeSuggestions() {
        if (document.querySelector('._8UZ6e')) {
            document.querySelector('._8UZ6e').remove();
        }
    }
})();
