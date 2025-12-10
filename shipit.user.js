// ==UserScript==
// @name         shipit
// @namespace    http://markkeller.dev/
// @version      0.3
// @author       keller00
// @match        https://github.com/*
// ==/UserScript==

(function () {
    document.documentElement.addEventListener('click', function (e) {
        var msg;
        if (e.target.name === 'reviewEvent' && e.target.value === 'approve') {
            msg = document.querySelector('[placeholder="Leave a comment"]')
            msg.value = `${msg.value}\n\n:ship: :ship:`;
        }
    });
}());
