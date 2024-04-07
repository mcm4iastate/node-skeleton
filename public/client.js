var socket = io();

socket.on("hello", (s) => {
    var temp = document.createElement("p");
    temp.innerHTML = s;
    document.body.appendChild(temp);
});