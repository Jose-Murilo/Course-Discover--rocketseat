import React, { useState } from 'react'
import './style.css'

import { Card } from '../../components/Card/index'

export function Home() {
  const [studentName, setStudentName] = useState();

  return (
    <div className='container'>
      <h1>Lista de presença</h1>
      <p>Nome:{studentName}</p>

      <input 
        type="text"
        placeholder="Digite o nome..."
        onChange={e => setStudentName(e.target.value)}
       />


      <button type="button">Adicionar</button>

      <Card name='Murilo' time='10:55:25' />
      <Card name = 'José' time = '10:57:47' />
      <Card name = 'Ana' time = '10:57:47' />
    </div>
  )
}