// ==UserScript==
// @name         Wahapedia Datasheet Customiser
// @namespace    https://github.com/hamsolo474/
// @version      1
// @description  Lets you use the datasheet page of Wahapedia as your game doc
// @author       hamsolo474
// @match        https://wahapedia.ru/*/datasheets.html
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let step = 2; //How far to move up and down

    function up(div){
        let previousDiv = div.previousElementSibling;
        div.parentNode.insertBefore(div, previousDiv);
    }

    function down(div){
        let nextDiv = div.nextElementSibling;
        div.parentNode.insertBefore(nextDiv, div);
    }

    let divs = document.querySelectorAll('.dsOuterFrame');
    divs.forEach((div, index) => {

        let indexNum = document.createTextNode(index);

        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.style.marginLeft = '10px';
        removeButton.style.padding = '5px';
        removeButton.style.cursor = 'pointer';


        let upButton = document.createElement('button');
        upButton.textContent = 'Up';
        upButton.style.marginLeft = '10px';
        upButton.style.padding = '5px';
        upButton.style.cursor = 'pointer';


        let downButton = document.createElement('button');
        downButton.textContent = 'Down';
        downButton.style.marginLeft = '10px';
        downButton.style.padding = '5px';
        downButton.style.cursor = 'pointer';

        div.appendChild(indexNum);
        div.appendChild(removeButton);
        div.appendChild(upButton);
        div.appendChild(downButton);

        removeButton.addEventListener('click', function() {
            div.remove();
        });

        upButton.addEventListener('click', function() {
            for (let i =0; i<step; i++){
                up(div);
            }
        });

        downButton.addEventListener('click', function() {
            for (let i=0; i<step; i++){
                down(div);
            }
        });
    });
})();
