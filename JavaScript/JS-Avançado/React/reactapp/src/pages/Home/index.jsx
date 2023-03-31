import React, { useState, useEffect } from 'react'
import './style.css'

import { Card } from '../../components/Card/index'

export function Home() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);
  const [users, setUsers] = useState({ name: '', avatar: '' });

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

  useEffect(() => {
    fetch('https://api.github.com/users/Jose-Murilo')
      .then(response => response.json())
      .then(data => setUsers({
        name: data.name,
        avatar: data.avatar_url
      }))
  }, [])

  return (
    <div className='container'>
      <header>
        <h1>Lista de presença</h1>
        <div>
          <strong>{users.name}</strong>
          <img src={users.avatar} alt="" />
        </div>
      </header>

      <input 
        type="text"
        placeholder="Digite o nome..."
        value={studentName}
        onChange={e => setStudentName(e.target.value)}
       />


      <button onClick={handleAddStudents} type="button">Adicionar</button>

      {
        students.map(student => <Card key={student.time} name={student.name} time={student.time} /> )
      }
      
    </div>
  )
};