import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Header from "./common/Header";
import EmployeeForm from "./screens/EmployeeForm";
import EmployeeList from "./screens/EmployeeList";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-employee" element={<EmployeeForm />} />
        <Route path="/edit-employee:id" element={<EmployeeForm />} />
        <Route path="/employees" element={<EmployeeList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
