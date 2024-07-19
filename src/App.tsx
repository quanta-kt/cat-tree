import type { Cat, CatWithChildrenInfo } from "./store";
import { useCatsList } from "./store";

function App() {
  const cats = useCatsList();

  return (
    <>
      <div>
        {cats.map((it) => (
          <Cat key={it.id} cat={it} />
        ))}
      </div>
    </>
  );
}

function Cat({ cat }: { cat: CatWithChildrenInfo }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <h2 id={cat.id}>{cat.name}</h2>

        <a href={`/cat/${cat.id}`}>(view)</a>
      </div>

      {!cat.description && (
        <p>
          <i>no description available</i>
        </p>
      )}

      {cat.description && <p>{cat.description}</p>}

      {!!cat.childrenInfo.length && (
        <p>
          Children:
          <br />
          <ul>
            {cat.childrenInfo.map((child) => (
              <li key={child.id}>
                <a href={`#${child.id}`}>{child.name}</a>
              </li>
            ))}
          </ul>
        </p>
      )}

      {!cat.children.length && (
        <p>
          <i>no children</i>
        </p>
      )}

      <hr />
    </div>
  );
}

export default App;
