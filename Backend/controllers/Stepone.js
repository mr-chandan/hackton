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
        quearylist += `CREATE TABLE ${storedata}_${formData}_languages ( id int NOT NULL auto_increment,languages varchar(50) NOT NULL unique,PRIMARY KEY (id));`
    }
}

module.exports = new Stepone();



