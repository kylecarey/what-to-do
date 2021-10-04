const username = "admin";
const password = "xc2N9FzNmWv4bWZX";
const cluster = "ezpcbuilder";
const dbname = "myFirstDatabase";

module.exports = {
    db: `mongodb+srv://${username}:${password}@${cluster}.931c3.mongodb.net/${dbname}?retryWrites=true&w=majority`
};