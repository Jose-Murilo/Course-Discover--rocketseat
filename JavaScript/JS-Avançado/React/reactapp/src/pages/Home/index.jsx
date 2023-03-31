import React, { useState } from 'react'
import './style.css'

import { Card } from '../../components/Card/index'

export function Home() {
  const [studentName, setStudentName] = useState();
  const [students, setStudents] = useState([]);

  function handleAddStudents() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }

    setStudents(prevState => [...prevState, newStudent])
    setStudentName("")
  }

  return (
    <div className='container'>
      <h1>Lista de presença</h1>

      <input 
        type="text"
        placeholder="Digite o nome..."
        value={studentName}
        onChange={e => setStudentName(e.target.value)}
       />


      <button onClick={handleAddStudents} type="button">Adicionar</button>

      {
        students.map(student => <Card name={student.name} time={student.time} /> )
      }
      
    </div>
  )
};