
import configs from "../config/config.js";
document.addEventListener("DOMContentLoaded", () => {
    Object.keys(configs).map((key, index) => {
        if (document.getElementById(key)) return document.getElementById(key).innerHTML = configs[key];
    })
});