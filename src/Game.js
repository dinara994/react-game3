import React, {useEffect, useState} from "react";



const Game = () => {
    const [random, setRandom] = useState(Math.round(Math.random()*10))
    const [guess, setGuess] = useState('')
    const [freeAttempt, setFreeAttempt] = useState(3)
    const [message, setMessage] = useState('')

    // const [renovate, setRenovate] = useState(0)
    //
    // const [local, setLocal] = localStorage.setItem('0');


    const handleInput = (e) => {
        setGuess(e.target.value)
    }
    const checkNumber = () => { //отнимает попытки
        setFreeAttempt(freeAttempt -1) //из предыдущего значения уменьшает на 1

        if (random > +guess) {
            setMessage('Недобор!')
        } else if(random < +guess ){
            setMessage('Перебор!')
        }
        setGuess('')
    }
    // userEffect(() => {
    //    localstorage = useState setLocal(e.target.value)
    //
    // })

   useEffect(() => { //useEffect - срабатывает ОДИН раз
        if (random !== +guess && freeAttempt === 0) {
            setMessage('Вы проиграли')
        } else if (random === +guess) {
            setMessage('Вы выиграли!')
        }
    }, [freeAttempt]) //Когда перемення изменяется,  то useEffect срабатывает заново
    return (
        <div className='container'>
           <div className='box'>
               <input className='box' type="number" value={guess} onChange={handleInput}/>  {/*onChange - tup при  inputa  срабатывает фун-я*/}
               <button onClick={checkNumber} disabled={!freeAttempt} >Check</button>  {/*disabled===3  - ограничение активности кнопки*/}


               <button   >Check</button>  {/*disabled===3  - ограничение активности кнопки*/}


               <label htmlFor='mode' >on</label>
               <input type='radio'  id='mode' name='mode' defaultChecked={true}/>
               <label htmlFor='mode'>off</label>
               <input type='radio' id='mode' name='mode' />

               <div  >Попытки:{guess} </div>
               {
                   Boolean(freeAttempt) &&
                   <div>У вас осталось {freeAttempt} {freeAttempt ===1? 'попытки': 'попытка'}</div>
               }
               <div>{message}</div>
               <style />
           </div>
        </div>
    )
}
export default Game













