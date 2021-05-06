import ChildCompo from "./Profile/ComponenetProfile";
import './App.css';
import image from "./imageInPub.jpg"
function App() {
  const handleName=(name)=> {
    alert(`Hi I'm ${name}`)
  }
  return (
    <div className="App">
      <ChildCompo 
      fullName="Nermine Bouabdallah" 
      bio="Hello"
      profession="Network engineer"
      handleName={handleName}>
        <div>
          <img src={image} style={{width:300,height:300}} alt="profilePhoto"></img>
        </div>


      </ChildCompo>
    </div>
  );
}

export default App;
