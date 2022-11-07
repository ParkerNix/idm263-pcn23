import {useEffect, useState} from 'react'

function App() {
  const [total, setTotal] = useState(100)
  const [persona, setPersona] = useState(20)
  const [personb, setPersonb] = useState(30)
  const [personc, setPersonc] = useState(50)
  const [personapercent, setPersonapercent] = useState(0.2)
  const [personbpercent, setPersonbpercent] = useState(0.3)
  const [personcpercent, setPersoncpercent] = useState(0.5)
  const [ratiotext, setRatiotext] = useState("hey, your ratios are messed up!")
  const isEven = () => {
    const personapercenttest = persona/total
    setPersonapercent(personapercenttest)
    const personbpercenttest = personb/total
    setPersonbpercent(personbpercenttest)
    const personcpercenttest = personc/total
    setPersoncpercent(personcpercenttest)
    const totalPercent = personapercenttest+personbpercenttest+personcpercenttest;
    if (1 === totalPercent) {
      setRatiotext("looks good!")
    } else {
      setRatiotext("hey, your ratios are messed up!");
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
                      const personanew = parseFloat(event.target.value)
                      setPersona(personanew)
                      const personapercentnew = personanew / total
                      setPersonapercent(personapercentnew)
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
                      const personbnew = parseFloat(event.target.value)
                      setPersonb(personbnew)
                      const personbpercentnew = personbnew / total
                      setPersonbpercent(personbpercentnew)
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
                      const personcnew = parseFloat(event.target.value)
                      setPersonc(personcnew)
                      const personcpercentnew = personcnew / total
                      setPersoncpercent(personcpercentnew)
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
                      const personapercentnew = parseFloat(event.target.value)
                      setPersonapercent(personapercentnew)
                      const personanum = total * personapercentnew
                      setPersona(personanum)
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
                      const personbpercentnew = parseFloat(event.target.value)
                      setPersonbpercent(personbpercentnew)
                      const personbnum = total * personbpercentnew
                      setPersonb(personbnum)
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
                      const personcpercentnew = parseFloat(event.target.value)
                      setPersoncpercent(personcpercentnew)
                      const personcnum = total * personcpercentnew
                      setPersonc(personcnum)
                    }
                  }
                />
              </label>
            </div>
            <div>
              <p>So all together, Person a owes ${persona}...</p>
              <p>...Person b owes ${personb}...</p>
              <p>...Person c owes ${personc}...</p>
              <p>...Which comes to a total of ${total}</p>
              <p>{ratiotext}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
