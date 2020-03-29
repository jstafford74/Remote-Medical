
import axios from "axios";

export default {

    signup: function (newUser) {
        return axios.post("/sndapi/auth/signup", newUser).then(res => res.data[0]);
    },
    
    acctCheck: (first, last, email, dob) => {
        return axios.get(`/rmt/auth/checkacct/${first}/${last}/${email}/${dob}`).then(res =>
            res.data)
    },

    upload: function (data, config) {
        return axios.post("/rmt/images", data, config).then((res) => res.data
        ).catch((error) => { console.log(error) });
    }

};