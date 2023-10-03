/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

window.onload = function()
{
    var info = document.getElementById("info");
    var sample = document.getElementById("sample");
    
    sample.onclick = function(e)
    {
        e.preventDefault();
        
        /*
         * OPERATIONS 
         *
         */
        window.location = this.getAttribute("href");
    };
    info.innerHTML = window.location;    
};