import React, { useEffect, useState } from 'react'
import Table from '../../components/Table'
import api from '../../services/api'
import { useAuthState } from '../../context'

const columns = [
  {
    name: 'Código',
    selector: 'id',
  },
  {
    name: 'Produtos',
    selector: 'products',
    subselector: 'name',
  },
]

function Purchases() {
  const [purchases, setPurchases] = useState([])
  const userDetails = useAuthState()

  async function getPurchases() {
    const response = await api.get('/purchases', {
      headers: { authorization: `Bearer ${userDetails.token}` },
    })

    setPurchases(response.data)
  }

  useEffect(() => {
    getPurchases()
  }, [userDetails])

  return <Table columns={columns} data={purchases} />
}

export default Purchases
