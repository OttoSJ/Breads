const React = require("react");
const Default = require("./layouts/default");

function Edit({ bread, bakers }) {
  return (
    <Default>
      <h2>Edit a bread</h2>
      <form action={`/breads/${bread.id}?_method=PUT`} method="POST">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          defaultValue={bread.name}
        />
        <label htmlFor="image">Image</label>
        <input type="text" name="image" id="image" defaultValue={bread.image} />

        <label htmlFor="baker">Baker</label>
        <select name="baker" id="baker" defaultValue={bread.baker}>
          {bakers.map((baker) => {
            return (
              <option value={baker.id} key={baker.id}>
                {baker.name}
              </option>
            );
          })}
        </select>

        <label htmlFor="hasGluten" name="name" id="hasGluten">
          Has Gluten
        </label>
        <input
          type="checkbox"
          name="hasGluten"
          id="hasGluten"
          defaultValue={bread.hasGluten}
          defaultChecked
        />
        <br />
        <input type="submit" />
      </form>
      <div className="backButton">
        <a href="/breads">
          <button>Go back to the index</button>
        </a>
      </div>
    </Default>
  );
}

module.exports = Edit;
