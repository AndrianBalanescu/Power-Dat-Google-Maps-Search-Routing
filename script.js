/**
 * Created by Andrew @ KavkazExpress
 */

function create() {
    var context = "selection";
    var title = "Power Dat Google Map Search Routing";
    chrome.contextMenus.create({"title": title, "contexts":[context],
        "id": "context" + context});
}

chrome.runtime.onInstalled.addListener(function() {
    create();
});

create();


chrome.contextMenus.onClicked.addListener(onClickHandler);

function onClickHandler(info, tab) {
       var sText = info.selectionText.replace(/[0-9]/g, " +to");
    var url = "https://www.google.com/maps?q=" + encodeURIComponent(sText);
    window.open(url, '_blank');
};


