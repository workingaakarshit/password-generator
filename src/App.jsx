import { useState, useEffect, useCallback } from 'react'


function App() {
  const [counter, setCounter] = useState(5)

  const [numberAllowed, setNumberAllowed] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState('')
 

  const increment = () => {
    setCounter(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCounter(prevCount => prevCount - 1);
  };

  const passwordGenerator = useCallback(()=>{
      let pass = " ";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstvwxyz"
      
      if(numberAllowed) str += "0123456789"
      if(char) str += "!~`@#$%^&*()_-+={}[]"
        
      for (let i=1; i <= counter;  i++) {
        let randomNum = Math.floor(Math.random() * str.length + 1 );
        pass += str.charAt(randomNum) 

      }
      setPassword(pass)
      
  }, [counter, numberAllowed, char, setPassword])

  useEffect(() => {
    passwordGenerator();

  }, [numberAllowed, char, counter, passwordGenerator])
 


  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover
         bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/13636589/pexels-photo-13636589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
    >
   
      <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text bg-gray-900 text-white'>
         <h1 className='text-center text-white my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
              value = {password}
              className='outline-none w-full py-1 px-3 rounded-lg text-black'
              placeholder='password'
              readOnly/>
          <button className='outline-none bg-blue-700 text-white 
          px-3 py-0.5 shrink-0 hover:bg-blue-500 active:bg-blue-800
           focus:outline-none focus:ring focus:ring-blue-200 rounded-lg'>Copy</button>
      </div>     
        <div className=' flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
             {/* <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l ml-5"
                onClick={decrement}>-
            </button>  */}
            Length
            <input
            type='number'
            value={counter}
            className='bg-gray max-w-10 py-2 px-2 text-black rounded-lg'
            onChange={(e) => {
              setCounter(parseInt(e.target.value));
            }}
          />
             {/* <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
              onClick={increment}>+
            </button>  */}
            </div>
            
            <div className=' flex items-center gap-x-1'>
                <input type="checkbox"
                    defaultChecked = {numberAllowed}
                    id = "numberInput"
                    onChange={() => {
                      setNumberAllowed((prev) => !prev);
                }} />
                <label htmlFor='numberInput'>Numbers</label>
            </div>
            <div className=' flex items-center gap-x-1'>
                <input type="checkbox"
                    defaultChecked = {char}
                    id = "characterInput"
                    onChange={() => {
                      setChar((prev) => !prev);
                }} />
                <label htmlFor='characterInput'>Characters</label>
            </div>
          </div>
      </div>
      </div>
    
    
  )
}

export default App
// basically, everything is shifting online and the target audience this company has will be huge plus to be able to receive mentorship in the newest technologies goes with my sense of attitude to constantly learning and improving.