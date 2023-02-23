
// ========= (001) =========

function lodad_Data_001() {
    // =========
    var http_001 = new XMLHttpRequest();
    // =========
    console.log(http_001)
    // =========
    http_001.onreadystatechange = function () {
        // =========
        // console.log(this.readyState)
        console.log(this.status)
        // =========
        if (this.readyState == 4 && this.status == 200) {
            // =========
            // console.log(this.responseText);
            // console.log(typeof this.responseText);
            console.log(JSON.parse(this.responseText));
            // =========
        }
        // =========
    }
    // =========
    // Asy-nch-ron-ous لا استنى
    // synchronous  استنى
    // =========
    http_001.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    http_001.send()
    // =========
}
lodad_Data_001()