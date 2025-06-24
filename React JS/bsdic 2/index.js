const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);

const Card1 = (title) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <p>Description</p>
    </div>
  );
};

const Container = (
  <div>
    {Card1("Hello")}
    {Card1("Notice")}
    {Card1("Warning!")}
  </div>
);
