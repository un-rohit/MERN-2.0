const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);

const Card1 = (obj) => {
    return (
        <div className="card">
            <h1>{obj.title}</h1>
            <p>Description</p>
        </div>
    );
};

const Card2 = (
    <div className="card">
        <h1>------Done-----</h1>
        <p>Description</p>
    </div>
);

const Container = (
    <div>
        {Card1({ title: "Hello" })}
        <Card1 title="Notice"></Card1>
        {Card1({ title: "Warning!" })}
        {Card2}
    </div>
);

reactRoot.render(Container);