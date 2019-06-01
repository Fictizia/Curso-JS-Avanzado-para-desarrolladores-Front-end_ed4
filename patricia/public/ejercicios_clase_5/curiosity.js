const token = "???";

function NasaRequest(sun, limit, delay) {
    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sun}&api_key=${token}`;
    console.log(`Request started for: ${url}`);

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    const res = JSON.parse(request.responseText)
                    limit--;
                    if (res.photos.length === 0 && limit > 0) {
                        console.log(`Delay for next request ${delay}ms`);
                        setTimeout(() => {
                            sun--;
                            resolve(NasaRequest(sun, limit, delay));
                        }, delay);
                    } else {
                        resolve(JSON.parse(request.responseText));
                    }
                } else {
                    const error = { msg: "Error", request: request }
                    reject(error)
                }
            }
        }
        request.open("GET", url, true);
        request.send();
    })
}

async function init() {
    /*
      - current sun: 2275
      - limit requests: 10
      - frecuency: 1000ms
    */
    const currentValue = await NasaRequest(2275, 10, 1000);
    console.log("currentValue:", currentValue);
}
init();