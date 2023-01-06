import './style.css'

import { Card } from '../../components/Card/index'

export function Home() {
  return (
    <div className='container'>
      <h1>Lista de presença</h1>
      <input type="text" placeholder="Digite o nome..." />
      <button type="button">Adicionar</button>

      <Card name='Murilo' time='10:55:25' />
      <Card name = 'José' time = '10:57:47' />
      <Card name = 'Ana' time = '10:57:47' />
    </div>
  )
}