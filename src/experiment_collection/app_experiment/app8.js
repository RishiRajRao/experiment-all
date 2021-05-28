import ChildComponent from "./Child";

    function ParentComponent(props) {
     let [counter, setCounter] = useState(0);
    
     let increment = () => setCounter(++counter);
    
     return (
       <div>
         <button onClick={increment}>Increment Counter</button>
         <ChildComponent counterValue={counter} />
       </div>
     );
    }

    //counter practice