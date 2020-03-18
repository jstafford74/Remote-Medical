
import axios from "axios";

export default {

    signup: function (newUser) {
        return axios.post("/api/auth/signup", newUser).then(res => res.data);
    }
}