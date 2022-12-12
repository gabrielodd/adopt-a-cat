import api from '../utils/api'

import { useState, useEffect } from 'react'
// import { useHistory } from 'react-router-dom'

export default function useAuth() {
  async function register(user) {
    let msgText = 'Cadastro realizado com sucesso!'
    let msgType = 'success'

    try {
      const data = await api.post('/users/register', user).then((response) => {
        return response.data
      })
      //await authUser(data)
    } catch (error) {
      // tratar erro
    }

  }

  return { register }
}