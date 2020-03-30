const upload = require("../middleware");

module.exports = {
    submitImage: () => {
        console.log('route hit: ');
        // console.log(storage.db)
        upload.single("file")
            , (req, res, next) => {
                console.log("Request ---", req.body);
                console.log("Request file ---", req.file);
                res.redirect("/")
                res.json()
            }
    }
}


// app.post("/rmt/images",
//     upload.single("file"), (req, res, next) => {
//         console.log("Request ---", req.body);
//         console.log("Request file ---", req.file);
//         res.redirect("/")
//     });
