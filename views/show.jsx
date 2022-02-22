const React = require("react");
const Default = require("./layouts/default");

<<<<<<< HEAD
function Show({ bread, index }) {
  console.log(bread.name);
  return (
    <Default>
      <h3>{bread.name} </h3>
      <p>
        and it
        {bread.hasGluten ? <span> does </span> : <span> does NOT </span>}
=======
function Show({ bread }) {
  console.log(bread.name);
  return (
    <Default>
      <h2>Show Page</h2>
      <h3>{bread.name}</h3>
      <p>
        and it
        {bread.hasGluten ? <span> does </span> : <span> does not </span>}
>>>>>>> 464a77c6686bd70bbb9aa29c8e2353ad8e28d07c
        have gluten.
      </p>
      <img src={bread.image} alt={bread.name} />
      <li>
<<<<<<< HEAD
        <a href="/breads">Go Home</a>
      </li>
      <form action={`/breads/:id${index}/?_method=DELETE`} method="POST">
        <input type="submit" value="DELETE" />
      </form>
      <a href={`/breads/${index}/edit`}>
        <button>Edit</button>
      </a>
=======
        <a href="/breads">Go home</a>
      </li>
>>>>>>> 464a77c6686bd70bbb9aa29c8e2353ad8e28d07c
    </Default>
  );
}

module.exports = Show;
