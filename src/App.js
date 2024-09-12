import './App.css';


function App() {
  return (
    <div className="App text-2xl text-emerald-500 container mx-auto p-2 bg-violet-200" onClick={()=>{
      console.log("Hello world");
    }}>
      <h1>Welcome to React</h1>
    </div>
  );
}

export default App;