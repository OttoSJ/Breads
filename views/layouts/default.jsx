const React = require("react");

function Default(html) {
  return (
    <html>
      <head>
        <title>{html.title || "Default"}</title>
        <link
          rel="stylesheet"
<<<<<<< HEAD
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css"
          integrity="sha512-Ojqt7YpXqYM6//AdMhErV3ot38rYgGF5QLJEwx7zhesjL9VqfhWiRz/dWK22hsn96RNz0CLl85+pg1P0BmfgVQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css"
          integrity="sha512-5fsy+3xG8N/1PV5MIJz9ZsWpkltijBI48gBzQ/Z2eVATePGHOkMIn+xTDHIfTZFVb9GMpflF2wOWItqxAP2oLQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
=======
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"
          integrity="sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ=="
          crossOrigin="anonymous"
>>>>>>> 464a77c6686bd70bbb9aa29c8e2353ad8e28d07c
        />
        <link rel="stylesheet" href="/main.css" />
      </head>
      <body>
        <div className="wrapper">
          <header>
            <h1>
<<<<<<< HEAD
              <a href="/breads">BreadCRUD</a>
=======
              <a href="=/breads">BreadCRUD</a>
>>>>>>> 464a77c6686bd70bbb9aa29c8e2353ad8e28d07c
            </h1>
          </header>
          <div className="container">
            <h1>HTML Rendered!</h1>
            {html.children}
          </div>
        </div>
      </body>
    </html>
  );
}

module.exports = Default;
