const React = require("react");
const Default = require("./layouts/default");

function Show({ bread }) {
  return (
    <Default>
      <h3>{bread.name} </h3>
      <p>
        and it
        {bread.hasGluten ? <span> does </span> : <span> does NOT </span>}
        have gluten.
      </p>
      <img src={bread.image} alt={bread.name} />
      <li>
        <a href="/breads">Go Home</a>
      </li>
      <form action={`/breads/${bread.id}/?_method=DELETE`} method="POST">
        <input type="submit" value="DELETE" />
      </form>
      <p>{bread.getBakedBy()} </p>
      <a href={`/breads/${bread.id}/edit`}>
        <button>Edit</button>
      </a>
    </Default>
  );
}

module.exports = Show;
