const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
    "mongodb+srv://sirojoriginprofile:WP0xjS70OzyF6DZb@cluster0.ylmjatw.mongodb.net/Reja";

mongodb.connect(
    connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, client) => {
        if (err) console.log("Error on connection MongoDB");
        else {
            console.log("MongoDB connection succeed");
            module.exports = client;
            // console.log(client);
            const app = require("./app");
            const server = http.createServer(app);
            let PORT = 5500;
            server.listen(PORT, function () {
                console.log(
                    `This server is running succesfully on port: ${PORT}, http://localhost:${PORT}`
                );
            });
        }
    }
);
