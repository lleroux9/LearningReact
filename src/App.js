import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';


function App() {
  const [role, setRole] = useState('dev');
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
          <>
            <input
              type="text"
              onChange={(e) => {
                console.log(e.target.value);
                setRole(e.target.value)
              }}
            />
            <Employee name='Logan' age='21' role='Mechatronic Systems Engineer'/>
            <Employee name='Liam' role='CPA'/>
            <Employee name='Lucas' age='22' role={role}/>
            <Employee name='Caiden'/>
            <Employee name='Ben' age='22'/>   

          </>
      ) : (
        <p>You cannot see employees</p>
          )
      }

    </div>
  );
}


export default App;
