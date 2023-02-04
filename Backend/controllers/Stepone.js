const axios = require("axios");

class Stepone {
    async search(req, res) {
        const { url } = req.body;
        axios.get(url)
            .then(response => {
                console.log(response.data);
                res.send(response.data.unsafe)
            })
            .catch(error => {
                console.error(error);
            });
    }

    async store(req, res) {
        console.log(req.body)
    }
}

module.exports = new Stepone();