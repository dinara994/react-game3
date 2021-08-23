import React, {useState} from "react";

const RandomNum = () => {
    const [number, setNumber] = useState(Math.floor(Math.random() * 10) + 1)
    const [guess, setGuess] = useState('') //input value
    const [attempt, setAttempt] = useState(0) // при обновлении страницы первоначальное значение
    const [message, setMessage] = useState('') // текст выводящий при клике
    const [freeAttempt, setFreeAttempt] = useState(3) // сколько попытоу=к
    console.log(Math.floor(Math.random(number) * 10) + 1)
    const check = (e) => {
        e.preventDefault()
         if (number === +guess) {
            setMessage('Вы угадали!')
        } else if(number < +guess ){
           return   { message:'Вы ,Близки!'}
        } else if(number > +guess){
             setMessage('Вы не угадали! у вас осталость  ')
         }

    }


    const changeUse = (e) => {
        setGuess(e.target.value)
    }
    return (
        <div>
            <h4>Угадайте с 3 попыток</h4>
                <input type="number" value={guess} onChange={changeUse}/>
                <button onClick={check}>Check</button>
            <div>{guess}</div>
            <div>{message}</div>
        </div>
    )

}


export default RandomNum


{/*//число отнимает рандом*/}
{/*//oninput()*/}
{/*//message*/}











