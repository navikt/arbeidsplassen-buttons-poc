import '@navikt/arbeidsplassen-buttons-poc/less/index.less';

function App() {
    return (
        <div className="App">
            <button className="Button--primary">Primary</button>
            <br/>
            <br/>
            <button className="Button--secondary">Secondary</button>
            <br />
            <br />
            <button className="Button--tertiary">Tertiary</button>
            <br />
            <br />
            <button className="Button--disabled" disabled>Disabled</button>
        </div>
    );
}

export default App;
