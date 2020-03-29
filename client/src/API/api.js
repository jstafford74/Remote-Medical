import axios from "axios";
export default {
    upload: function (data, config) {
        return axios.post("/rmt/images", data, config).then((res) => res.data
        ).catch((error) => { console.log(error) });
    }
}