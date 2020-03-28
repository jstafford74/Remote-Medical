
import axios from "axios";

export default {

    signup: function (newUser) {
        return axios.post("/sndapi/auth/signup", newUser).then(res => console.log(res.data));
    },
    acctCheck: (first, last, email, dob) => {
        return axios.get(`/rmt/auth/checkacct/${first}/${last}/${email}/${dob}`).then(res =>
            res.data)
    }
};