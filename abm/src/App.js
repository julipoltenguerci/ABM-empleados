import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "./components/Header";
import { EmployeeForm } from "./screens/EmployeeForm";
import { EmployeeList } from "./screens/EmployeeList";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<EmployeeList />} />
      <Route path="/employees" element={<EmployeeList />} />
      <Route path="/employee/:employee_id?" element={<EmployeeForm />} />
    </Routes>
  </BrowserRouter>
);

export default App;
