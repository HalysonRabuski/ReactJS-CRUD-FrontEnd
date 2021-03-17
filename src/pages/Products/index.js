import React, { useEffect, useState } from 'react'
import Table from '../../components/Table'
import api from '../../services/api'
import { useAuthState } from '../../context'

function Products() {
  const [products, setProducts] = useState([])
  const userDetails = useAuthState()

  async function getProducts() {
    const response = await api.get('/products', {
      headers: { authorization: `Bearer ${userDetails.token}` },
    })

    setProducts(response.data)
  }

  useEffect(() => {
    getProducts()
  }, [userDetails])

  async function handleBuy(item) {
    let prdts = []
    if (localStorage.getItem('crud-products')) {
      prdts = JSON.parse(localStorage.getItem('crud-products'))
    }

    const filter = await prdts.filter((a) => a.name === item.name)

    if (filter.length > 0) {
      alert('O produto já se encontra no carrinho')
    } else {
      prdts.push(item)
      localStorage.setItem('crud-products', JSON.stringify(prdts))

      alert('Produto adicionado ao carrinho com sucesso!')
    }
  }

  const columns = [
    {
      name: 'Nome',
      selector: 'name',
    },
    {
      name: 'Descrição',
      selector: 'description',
    },
    {
      name: 'Ações',
      action: (row) => (
        <button
          onClick={() => handleBuy(row)}
          aria-label="Comprar"
          type="button"
          className="btn btn-info"
        >
          Comprar
        </button>
      ),
    },
  ]

  return <Table columns={columns} data={products} />
}

export default Products
