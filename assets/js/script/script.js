
import configs from "../config/config.js";
document.addEventListener("DOMContentLoaded", () => {
    Object.keys(configs).map((key,index)=>{
        document.getElementById(key).innerHTML = configs[key];
    })
});