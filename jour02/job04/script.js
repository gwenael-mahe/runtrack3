function addletter(){
    document.getElementById('keylogger').value+=event.key;
}
document.addEventListener("keypress",addletter, false);