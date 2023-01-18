import {useEffect, useState} from 'react';

function App() {
  const [total, setTotal] = useState(100);
  const [persona, setPersona] = useState(20);
  const [personb, setPersonb] = useState(30);
  const [personc, setPersonc] = useState(50);
  const [personapercent, setPersonapercent] = useState(0.2);
  const [personbpercent, setPersonbpercent] = useState(0.3);
  const [personcpercent, setPersoncpercent] = useState(0.5);
  const [personapercentstring, setPersonapercentstring] = useState("20");
  const [personbpercentstring, setPersonbpercentstring] = useState("30");
  const [personcpercentstring, setPersoncpercentstring] = useState("50");
  const [personalocked, setPersonalocked] = useState(20);
  const [personblocked, setPersonblocked] = useState(30);
  const [personclocked, setPersonclocked] = useState(50);
  const [personapercentlocked, setPersonapercentlocked] = useState(0.2);
  const [personbpercentlocked, setPersonbpercentlocked] = useState(0.3);
  const [personcpercentlocked, setPersoncpercentlocked] = useState(0.5);
  const [lock1, setlock1] = useState("Click to lock");
  const [lock2, setlock2] = useState("Click to lock");
  const [lock3, setlock3] = useState("Click to lock");
  const [lock1enabled, setlock1enabled] = useState(false);
  const [lock2enabled, setlock2enabled] = useState(false);
  const [lock3enabled, setlock3enabled] = useState(false);
  const [error, seterror] = useState("");
  const Evenvalues = (variable, num) => {
    if ( (lock1enabled === true && lock2enabled === true) || (lock1enabled === true && lock3enabled === true) || (lock2enabled === true && lock3enabled === true) ) {
      return
    }
    if ( variable === "persona" ) {
      let difference = total - num;
      let newdollar = difference/2;
      setPersonb(newdollar);
      setPersonc(newdollar);
      let newpercent = newdollar/total;
      setPersonbpercent(newpercent);
      setPersoncpercent(newpercent);
      if ( lock2enabled === true ) {
        setPersonb(personblocked);
        setPersonbpercent(personbpercentlocked);
        let newdollar = difference - personblocked;
        setPersonc(newdollar);
        let newpercent = newdollar/total;
        setPersonapercent(newpercent);
      }
      if ( lock3enabled === true ) {
        setPersonc(personclocked);
        setPersoncpercent(personcpercentlocked);
        let newdollar = difference - personclocked;
        setPersonb(newdollar);
        let newpercent = newdollar/total;
        setPersonbpercent(newpercent);
      }
    }
    if ( variable === "personb" ) {
      let difference = total - num;
      let newdollar = difference/2;
      setPersona(newdollar);
      setPersonc(newdollar);
      let newpercent = newdollar/total;
      setPersonapercent(newpercent);
      setPersoncpercent(newpercent);
      if ( lock1enabled === true ) {
        setPersona(personalocked);
        setPersonapercent(personapercentlocked);
        let newdollar = difference - personalocked;
        setPersonc(newdollar);
        let newpercent = newdollar/total;
        setPersoncpercent(newpercent);
      }
      if ( lock3enabled === true ) {
        setPersonc(personclocked);
        setPersoncpercent(personcpercentlocked);
        let newdollar = difference - personclocked;
        setPersona(newdollar);
        let newpercent = newdollar/total;
        setPersonapercent(newpercent);
      }
    }
    if ( variable === "personc" ) {
      let difference = total - num;
      let newdollar = difference/2;
      setPersona(newdollar);
      setPersonb(newdollar);
      let newpercent = newdollar/total;
      setPersonapercent(newpercent);
      setPersonbpercent(newpercent);
      if ( lock1enabled === true ) {
        setPersona(personalocked);
        setPersonapercent(personapercentlocked);
        let newdollar = difference - personalocked;
        setPersonb(newdollar);
        let newpercent = newdollar/total;
        setPersonbpercent(newpercent);
      }
      if ( lock2enabled === true ) {
        setPersonb(personblocked);
        setPersonbpercent(personbpercentlocked);
        let newdollar = difference - personblocked;
        setPersona(newdollar);
        let newpercent = newdollar/total;
        setPersonapercent(newpercent);
      }
    }
  }
  const isEven = () => {

    const totalPercent = personapercent+personbpercent+personcpercent;
    if ( 1 !== totalPercent ) {
      seterror("Please recheck your values, they do not add up to your total!");
    }
    if ( 1 === totalPercent ) {
      seterror("");
    }
  }
  useEffect(() => {
    isEven()
  }, [persona, personb, personc, total])
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="https://use.typekit.net/sem7ueo.css"></link>
      
      <div className="container">
        <div className="row">
          <div className="col">
            <div className='my-4 d-flex flex-column'>
              <label>
                First, the total is: 
                <input
                  className='ml-2'
                  type="number"
                  min="0"
                  step="0.1"
                  value={total}
                  onChange={
                    event => {
                      setTotal(event.target.value);
                    }
                  }
                />
              </label>
            </div>
            <div className='mb-4 d-flex flex-column'>
              <label>
              And then Person A is paying:
                <input
                  className='ml-2'
                  type="number"
                  min="0"
                  max={total}
                  step="0.1"
                  value={persona}
                  onChange={
                    event => {
                      const personanew = parseFloat(event.target.value);
                      setPersona(personanew);
                      const personapercentnew = personanew / total;
                      setPersonapercent(personapercentnew);
                      Evenvalues("persona", personanew);
                    }
                  }
                />
              </label>
              <label>
                Person B will pay:
                <input
                  className='ml-2'
                  type="number"
                  min="0"
                  max={total}
                  step="0.1"
                  value={personb}
                  onChange={
                    event => {
                      const personbnew = parseFloat(event.target.value);
                      setPersonb(personbnew);
                      const personbpercentnew = personbnew / total;
                      setPersonbpercent(personbpercentnew);
                      Evenvalues("personb", personbnew);
                    }
                  }
                />
              </label>
              <label>
                Person C is giving up:
                <input
                  className='ml-2'
                  type="number"
                  min="0"
                  max={total}
                  step="0.1"
                  value={personc}
                  onChange={
                    event => {
                      const personcnew = parseFloat(event.target.value);
                      setPersonc(personcnew);
                      const personcpercentnew = personcnew / total;
                      setPersoncpercent(personcpercentnew);
                      Evenvalues("personc", personcnew);
                    }
                  }
                />
              </label>
            </div>
            <div className='mb-4 d-flex flex-column'>
              <label>
                Which makes Person A's percentage: 
                <input
                  className='ml-2'
                  type="number"
                  min="0"
                  max="1"
                  step="0.1"
                  value={personapercent}
                  onChange={
                    event => {
                      const personapercentnew = parseFloat(event.target.value);
                      setPersonapercent(personapercentnew);
                      const personanew = total * personapercentnew;
                      setPersona(personanew);
                      const personapercentstring = 100 * personapercentnew;
                      setPersonapercentstring(personapercentstring)
                      Evenvalues("persona", personanew);
                    }
                  }
                />
              </label>
              <label>
                Person B's percentage looks like: 
                <input
                  className='ml-2'
                  type="number"
                  min="0"
                  max="1"
                  step="0.1"
                  value={personbpercent}
                  onChange={
                    event => {
                      const personbpercentnew = parseFloat(event.target.value);
                      setPersonbpercent(personbpercentnew);
                      const personbnew = total * personbpercentnew;
                      setPersonb(personbnew);
                      Evenvalues("personb", personbnew);
                    }
                  }
                />
              </label>
              <label>
                And Person C's percentage comes to: 
                <input
                  className='ml-2'
                  type="number"
                  min="0"
                  max="1"
                  step="0.1"
                  value={personcpercent}
                  onChange={
                    event => {
                      const personcpercentnew = parseFloat(event.target.value);
                      setPersoncpercent(personcpercentnew);
                      const personcnew = total * personcpercentnew;
                      setPersonc(personcnew);
                      Evenvalues("personc", personcnew);
                    }
                  }
                />
              </label>
            </div>
            <div className='mb-4 d-flex flex-column'>
              <label>
              Lock person A?
                <button 
                  className='ml-2'
                  onClick={
                    () => {
                      if ( lock1enabled === true ) {
                        setlock1enabled(false);
                        setlock1("Click to lock");
                      } 
                      if ( lock1enabled === false ) {
                        setlock1enabled(true);
                        setlock1("Click to unlock");
                      }
                      setPersonalocked(persona);
                      setPersonapercentlocked(personapercent);
                    }
                  }>
                  {lock1}
                </button>
              </label>
              <label>
                Lock person B?
                  <button 
                  className='ml-2'
                  onClick={
                    () => {
                      if ( lock2enabled === true ) {
                        setlock2enabled(false);
                        setlock2("Click to lock");
                      } 
                      if ( lock2enabled === false ) {
                        setlock2enabled(true);
                        setlock2("Click to unlock");
                      }
                      setPersonblocked(personb);
                      setPersonbpercentlocked(personbpercent);
                    }
                  }>
                  {lock2}
                  </button>
                </label>
              <label>
                Lock person C?
                  <button 
                  className='ml-2'
                  onClick={
                    () => {
                      if ( lock3enabled === true ) {
                        setlock3enabled(false);
                        setlock3("Click to lock");
                      } 
                      if ( lock3enabled === false ) {
                        setlock3enabled(true);
                        setlock3("Click to unlock");
                      }
                      setPersonclocked(personc);
                      setPersoncpercentlocked(personcpercent);
                    }
                  }>
                  {lock3}
                  </button>
              </label>
            </div>
            <div>
              <p>So all together, Person a owes ${persona}...</p>
              <p>...Person b owes ${personb}...</p>
              <p>...Person c owes ${personc}...</p>
              <p>...Which comes to a total of ${total}</p>
            </div>
            <div className='d-inline'>
              <button id='submit'>
                Submit
              </button>
              <p className='text-danger'>{error}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
