require("dotenv").config();
const port = 8000;

console.log(
  `I am ${process.env.MY_NAME} in ${process.env.MY_CITY} and I like ${process.env.MY_LANGUAGE}`
);
// console.log(
//   `The secret key ${process.env.SECRET_API_KEY} will be used to connect to the third party API`
// );
// console.log(
//   `The server will connect to the database with the user "${process.env.DB_USER}" and the password "${process.env.DB_PASSWORD}"`
// );
// const requestHandler = (request, response) => {
//   console.log(request.url);
//   if (request.url === "/") {
//     response.end("Hello Node.js Server!");
//   } else if (request.url === "/about") {
//     response.end("This demonstrates routing with Node.js.");
//   } else {
//     response.end("Default page (URLs other than / and /about)");
//   }
// };

// const server = http.createServer(requestHandler);

// server.listen(port, (err) => {
//   if (err) {
//     console.error("Something bad happened");
//   } else {
//     console.log(`Server is listening on ${port}`);
//   }
// });
