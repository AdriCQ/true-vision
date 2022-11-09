import axios from "axios";
// import cookies from "vue-cookies";

export default axios.create({
    baseURL: "http://localhost:8000/",
    headers: {
        "Content-type": "application/json",
        // "X-CSRFToken": cookies.get("csrftoken"),
    },
});


