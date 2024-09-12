import './App.css';


function App() {
  return (
    <div className="App text-2xl text-emerald-500 container mx-auto p-2 bg-violet-200" onClick={()=>{
      var a = 10;
      var b=30;
      var c = a+b;
      console.log(c);
      console.log("Hello world");
    }}>
      <h1>Welcome to React</h1>
    </div>
  );
}

export default App;