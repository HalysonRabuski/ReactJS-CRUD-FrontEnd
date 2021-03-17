import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

function Table({ columns, data }) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.name}>{column.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr>
            {columns.map((element) =>
              element.action ? (
                <td>{element.action(item)}</td>
              ) : (
                <td>
                  {element.subselector ? (
                    <p>
                      {item[element.selector].map((dd) => (
                        <p>{dd.name}</p>
                      ))}
                    </p>
                  ) : (
                    <p>{item[element.selector]}</p>
                  )}
                </td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default Table
