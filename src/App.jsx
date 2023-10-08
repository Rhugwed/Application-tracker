import "./App.css";
import ApplicationForm from "./components/ApplicationForm/ApplicationForm";
import Navigation from "./components/Navigation/Navigation";

const App = () => {
  return <div>
    <Navigation/>
    <main className="main_container">
      <ApplicationForm/>
    </main>
    
  </div>
};

export default App;