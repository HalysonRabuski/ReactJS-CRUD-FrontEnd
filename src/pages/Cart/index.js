import React, { useState } from 'react'
import Table from '../../components/Table'
import api from '../../services/api'
import { useAuthState } from '../../context'

// import { Container } from './styles';

function Cart() {
  const userDetails = useAuthState()
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem('crud-products'))
  )

  const columns = [
    {
      name: 'Nome',
      selector: 'name',
    },
    {
      name: 'Descrição',
      selector: 'description',
    },
  ]

  function handleErase() {
    localStorage.removeItem('crud-products')
    setData()
  }

  async function handlePurchase() {
    await api
      .post(
        '/purchases',
        { products: data },
        {
          headers: { authorization: `Bearer ${userDetails.token}` },
        }
      )
      .then(() => {
        localStorage.removeItem('crud-products')
        setData()
      })
  }

  return (
    <>
      {data ? (
        <>
          <Table columns={columns} data={data} />
          <div>
            <button
              className="btn btn-danger mt-3"
              type="button"
              onClick={handleErase}
            >
              Limpar Carrinho
            </button>
            <button
              className="btn btn-success float-right mt-3"
              type="button"
              onClick={handlePurchase}
            >
              Comprar
            </button>
          </div>
        </>
      ) : (
        <p>Nenhum produto no carrinho!</p>
      )}
    </>
  )
}

export default Cart
