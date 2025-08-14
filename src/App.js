import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grid-project" element={<GridProject />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
