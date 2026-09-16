const http = require("http");

const PORT = process.env.PORT || 2000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
        <h1>Hello from Node.js....</h1>
        <p>GitHub Actions + Docker Demo</p>
    `);
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});