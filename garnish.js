if(getCookie("lang").toUpperCase()=="DE") {
    // Update settings
    document.getElementById("lang-de").selected = "selected";
    var langSetting = "DE";
}
else {
    var langSetting = "EN";
}
function reset() {
    // TBD.
    window.location = window.location.href.split("-")[0];
}
function dismiss(obj) {
    obj.remove();
}
function expand() {
    arr1 = document.getElementsByClassName("desc");
    arr2 = document.getElementsByClassName("expand");
    if(langSetting=="DE") {
        var hideText = "Beschreibungen verbergen";
        var showText = "Beschreibungen anzeigen";
    }
    else {
        var hideText = "hide descriptions";
        var showText = "show descriptions";
    }
    if(arr2[0].innerHTML == hideText) {
        for(var i=0; i<arr1.length; i++) {
            arr1[i].classList.remove("open");
            arr2[i].innerHTML = showText;
        }
    }
    else {
        for(var i=0; i<arr1.length; i++) {
            arr1[i].classList.add("open");
            arr2[i].innerHTML = hideText;
        }
    }    
}
var modal = document.getElementById("modal");
function popbox() {
    modal.style.display = "block";
}
function closebox() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function popboxShare() {
    document.getElementById("modalShare").style.display = "block";
}
function closeboxShare() {
    document.getElementById("modalShare").style.display = "none";
}
const lvlcap = 130;
document.getElementById("settingsLevel").max = lvlcap;
document.getElementById("settingsLevel").value = lvlcap;
function updateSettings() {
    var tooltips = document.getElementById("settingsTooltips").checked?1:0;
    var level = document.getElementById("settingsLevel").value;
    var lang = document.getElementById("lang").value;
    // Save settings locally
    document.cookie = tooltips==1 ? "showTooltips=; expires=Thu, 01 Jan 1970 00:00:00 UTC;" : "showTooltips="+tooltips;
    document.cookie = level>=lvlcap ? "charLevel=; expires=Thu, 01 Jan 1970 00:00:00 UTC;" : "charLevel="+level;
    document.cookie = lang=="EN" ? "lang=; expires=Thu, 01 Jan 1970 00:00:00 UTC;" : "lang="+lang;
    closebox();
    var node = document.createElement("div");
    var textnode = document.createTextNode(langSetting=="DE"?"Einstellungen gespeichert. Bitte aktualisieren Sie Ihre Seite.":"Settings saved. Please refresh your page.");
    node.appendChild(textnode);
    node.classList = "shared";
    node.setAttribute("onclick","javascript:dismiss(this)");
    document.getElementsByTagName("body")[0].appendChild(node);
}
function resetSettings() {
    // Expire cookie
    document.cookie = "showTooltips=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "charLevel=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "lang=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.getElementById("settingsTooltips").checked = "checked";
    document.getElementById("settingsLevel").value = lvlcap;
    document.getElementById("lang-en").selected = "selected";
    closebox();
    var node = document.createElement("div");
    var textnode = document.createTextNode(langSetting=="DE"?"Einstellungen zurückgesetzt. Bitte aktualisieren Sie Ihre Seite.":"Settings reset. Please refresh your page.");
    node.appendChild(textnode);
    node.classList = "shared";
    node.setAttribute("onclick","javascript:dismiss(this)");
    document.getElementsByTagName("body")[0].appendChild(node);
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}
if(getCookie("showTooltips")!="") {
    // Update settings
    document.getElementById("settingsTooltips").removeAttribute("checked");
    // Remove tooltips
    var removeTips = document.getElementsByClassName("tip");
    while(removeTips[0]) {
        removeTips[0].remove();
    }
}
if(getCookie("charLevel")!="") {
    // Update settings
    document.getElementById("settingsLevel").value = getCookie("charLevel");
}