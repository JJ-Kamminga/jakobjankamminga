function enrichList(listId) {
    const discogsAlbumInit = {
        method: 'GET',
        cache: 'default',
        headers: {
            'user-agent': 'Jakob Jan Kamminga - jakobjankamminga.com'
        }
    }
    let targetUrl = "https://api.discogs.com/lists/" + listId;
    let listRequest = new Request(targetUrl, discogsAlbumInit);

    function enrichList(listObject, listId) {
        var listSpace = document.getElementById(listId);
        let itemArray = listObject.items;
        itemArray.reverse();

        itemArray.forEach(function (item) {
            let albumNode = document.createElement("li");
            albumNode.classList.add("list-album");
            let titleNode = document.createElement("span");
            titleNode.classList.add("list-album-title");
            let linkNode = document.createElement("span");
            titleNode.classList.add("list-album-link");
            let commentNode = document.createElement("p");
            commentNode.classList.add("list-album-comment");

            //fill from API response
            linkNode.innerHTML = " <sup><a href='" + item.uri + "' target='blank'>Discogs</a></sup>";
            let albumDisplayTitle = document.createTextNode(item.display_title);
            let albumComment = document.createTextNode(item.comment);
            
            //append to elements if needed
            titleNode.appendChild(albumDisplayTitle);
            commentNode.appendChild(albumComment);
            
            //append elements to document
            albumNode.appendChild(titleNode);
            albumNode.appendChild(linkNode);
            albumNode.appendChild(commentNode);
            
            listSpace.appendChild(albumNode);
        });
    }

    fetch(listRequest)
        .then(function (response) {
            if (!response.ok) {
                throw new Error('HTTP Error, status = ' + response.status);
            }
            return response.json();
        })
        .then(function (response) {
            try {
                enrichList(response, listId);
            }
            catch (e) {
                console.log(e);
            }
        }
        );
}