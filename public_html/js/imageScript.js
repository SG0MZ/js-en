/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

var i = 2;

function loadMoreImages()
{
    if (i < 4)
    {
        var images = document.getElementById("images");
        var image = new Image();

        image.src = "img/screen"+(i++)+".jpg";

        images.appendChild(image);

        if (i !== 4)
        {
            var loadMoreButtonClone = this.cloneNode(true);
            loadMoreButtonClone.onclick = loadMoreImages;
            document.body.appendChild(loadMoreButtonClone);
        }
        this.parentNode.removeChild(this);

       
    }
}

window.onload = function()
{
    
    var loadMoreButton = document.getElementById("loadMoreButton");
    
    loadMoreButton.onclick = loadMoreImages;
      
};