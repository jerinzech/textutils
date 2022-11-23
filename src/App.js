// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <NavBar title="TextUtils" />
      <TextForm heading="Enter text to analyse" />
    </>
  );
}

export default App;
