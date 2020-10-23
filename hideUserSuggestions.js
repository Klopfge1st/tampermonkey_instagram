// ==UserScript==
// @name         InstagramHideUserSuggestions
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide user suggestions on instagram
// @match        https://www.instagram.com/
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    document.querySelector('._8UZ6e').remove();
})();
