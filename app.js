

window.addEventListener('load', async e => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('server-worker.js')
            .then(async (registration) => {
                const permission = await window.Notification.requestPermission();
                if (permission !== `granted`) {
                    throw new Error("Permissoin  not granted for Notification")
                }
                const title = `Simple Title`;
                const options = {
                    body: `Simple piece of body text.\nSecond line of body text :)`
                };
                registration.showNotification(title, options);
                console.log("Service worker register")
            })


    }
})

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {
        console.log(json)
        for (var i = 0; i < json.length; i++) {
            let showData = document.getElementById("showData");
            let div = document.createElement("div");
            showData.appendChild(div);
            let h2 = document.createElement("h2");
            h2.setAttribute("class", "title");
            h2.innerHTML = json[i].title;
            div.appendChild(h2)
        }
    })
