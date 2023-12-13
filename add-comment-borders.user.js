// ==UserScript==
// @name        Add Comment Borders
// @namespace   Violentmonkey Scripts
// @match       https://*.zendesk.com/*
// @grant       none
// @version     1.0
// @downloadURL https://raw.githubusercontent.com/BagToad/add-zendesk-comment-borders/main/add-comment-borders.user.js
// @author      Kynan Ware
// @description Add some borders between Zendesk comments in the Agent Workspace for readability.
// @inject-into content
// ==/UserScript==

let styleTag = document.createElement('style');

// Add some style rules to it
styleTag.innerHTML = `
[data-test-id="omni-log-comment-item"] {
    border-top: 3px solid black !important;
}
`;

// Append the style tag to the head of the document
document.head.appendChild(styleTag);
