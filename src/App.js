import Hello from './Hello'
import Content from './Content'
import { useState, useEffect, useCallback} from 'react'
import {jokeURL} from './service/api'

export default function App(){
  const [name, setName] = useState('')
  const [ joke, setJoke ] = useState({})
  const [ isLoad, setIsLoad] = useState(false)
  const [ newJoke, setNewJoke] = useState(false)


  // const handleSetName = (nameFunction) => {
  //   setName(nameFunction)
  // }

  const handleSetName = useCallback( ( nameFunction ) => {
    setName(nameFunction)
    console.log(joke?.value)
  }, [joke])
  

  useEffect( () => {
    setIsLoad(true)
    jokeURL.get('random').then(
      response => {
        setJoke(response.data)
        setIsLoad(false)

      }
    )
  }, [newJoke])

  if(isLoad){
    return(
      <>
        <div>
          <p>Carregandooo......</p>
        </div>
      </>
    )
  };

  return (
    <>
      <Hello name={name}/>
      <button onClick={() => handleSetName('Meliuzzz')}>Clique Aqui</button>
      <Content/>
      <hr/>
      <button onClick={ () => setNewJoke(!newJoke)}> Mudar </button>
      <img src={joke?.icon_url} alt={joke?.value}/> 
      <h1 style={{textAlign: 'center'}}> 
        {joke?.value} 
        </h1>
        </>
  )
}
