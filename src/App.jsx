import Section from './compoments/Section';

function App() {
  return (
    <div className="App">
      <Section 
        title="Coleções em destaque" 
        titleAlign="center"
      >
        <img src="/collection-1.png" alt="Collection 1" />
        <img src="/collection-2.png" alt="Collection 2" />
        <img src="/collection-3.png" alt="Collection 3" />
      </Section>
    </div>
  );
}

export default App;

