import React, { useState, useEffect } from 'react'
import './style.css'

import { Card, CardProps } from '../../components/Card/index'

type ProfileUser = {
  name: string;
  avatar_url: string;
}

type User = {
  name: string;
  avatar: string;
}

export function Home() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState<CardProps[]>([]);
  const [users, setUsers] = useState<User>({} as User);

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
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/Jose-Murilo');
      const data = await response.json() as ProfileUser;
      setUsers({
        name: data.name,
        avatar: data.avatar_url
      })
    }

    fetchData();
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
        students.map(student => (
          <Card 
            key={student.time} 
            name={student.name} 
            time={student.time} 
          />
        ))
      }
    </div>
  )
};