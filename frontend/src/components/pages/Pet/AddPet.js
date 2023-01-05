import api from '../../../utils/api'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './AddPet.module.css'

import useFlashMessage from '../../../hooks/useFlashMessage'

function AddPet() {
  return (
    <section>
      <div className={styles.addpet_header}>
        <h1>Cadastre um pet</h1>
        <p>Depois ele ficará disponível para adoção</p>
      </div>
      <p>Formulário</p>
    </section>
  )
}

export default AddPet