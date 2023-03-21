if('serviceWorker' in navigator)
{

        console.log("Puedes usar el Service Worker");
        navigator.serviceWorker.register('./sw.js')

                                .then(res => console.log('SW cargar corrextamente',res))
                                .catch(error => console.log('service worker no se ha podido registrar',error));



}
else
{
    console.log("No se puede usar el service worker")
}