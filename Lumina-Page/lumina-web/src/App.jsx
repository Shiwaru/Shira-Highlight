import './App.css';

function App() {
  return (
    <div className="main-container">
      <nav className="navbar">
        <div className="logo">LUMINA</div>
        <div className="links">
          {/* <a href="#features">Características</a> */}
          <a href="https://github.com/Shiwaru/Lumina-Highlight" target="_blank">GitHub</a>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <h1 className="title">Lumina Launcher</h1>
          <p className="subtitle">
            Una experiencia de Minecraft optimizada, elegante y libre. 
            Versión actual: <span className="version">1.21.11</span>
          </p>
          <div className="button-group">
            <button className="btn-primary">Que lindo oe</button><br /><br />
            <button className="btn-primary">Descargar Ahora</button>
          </div>
        </div>
      </header>

      <div className="shaii-bg-effect"></div>
    </div>
  );
}

export default App;