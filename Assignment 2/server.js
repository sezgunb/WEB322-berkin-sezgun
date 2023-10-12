
//setup
const express = require("express");
const app = express();
app.set("view engine", "ejs")
const port = 3100;
const users = require ("./data/fakeUsers.json");
console.log(users);

//Nav bar
const menu = `<nav><a href="/">Home</a>&nbsp;|&nbsp;<a href="/list">List</a></div>`;

//Bootstrap template
const template = function (title, html) {
  return `<html>
    <head>
    <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
    crossorigin="anonymous"
  />
    </head>
    <body class="container">
        <div>${menu}</div>
        <h1>${title}</h1>
        <div>
            ${html}
        </div> 
    </body>
    </html>`;
};

//Routes

//Login page
app.get("/", (req, res) => {
  const content = `<form method="POST"><input type="text" name="username" />
    <input type="password" name="password" />
    <button class="btn btn-primary" type="submit">GO!</button></form>`;
  const html = template("Login", content);
  res.send(html);
});

app.post("/", (req, res) => {
   res.redirect("/list");
});

//List page
app.get("/list", (req, res) => {
    const first25Users = users.slice(0, 25); // Get the first 25 users from the array.

    const tableRows = first25Users.map((user) => {
        return `
            <tr>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.email}</td>
                <td><a href="/detail/${user.email}">Details</a></td>
            </tr>
        `;
    });

    const table = `
        <table>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Details</th>
            </tr>
            ${tableRows.join("")}
        </table>
    `;

    res.send(template("Table", table));
});

//Detail page
app.get("/detail/:id", (req, res) => {
    const email = req.params.id;
    const user = users.find((user) => user.email === email);

    if (user) {
        const detailHTML = `
            <h4>First Name: ${user.firstName}</h4>
            <h4>Last Name: ${user.lastName}</h4>
            <h4>Email: ${user.email}</h4>
        `;

        const pageHTML = template("Detail Page", detailHTML);
        res.send(pageHTML);
    } else {
        res.send("User not found");
    }
});

//Listening for requests
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});