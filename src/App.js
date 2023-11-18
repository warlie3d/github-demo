import { useState } from "react";
import Input from "./Components/Input";
import Display from "./Components/Display";
function App() {
  const [user, setUser] = useState(null);
  const display = user && <Display user={user} />;

  return (
    <div classnName="App">
      {/* //input component */}
      <Input setUser={setUser} />
      {display}
    </div>
  );
}

//components:
//app -> userData
//input -> userName
//display -> userData (prop)

//stateful variables
//1.user data
//2.username

export default App;

//step1 : get the data
//step2 : display the data

//conditional rendering = dont render the display until the user exist
