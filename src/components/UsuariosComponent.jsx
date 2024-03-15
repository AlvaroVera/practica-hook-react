import React from 'react'

const UsuariosComponent = () => {

    



  return (
    <>
        <h1>Lista de usuarios</h1>
        <table className="table table-dark">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Website</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
            </tbody>
        </table>
    </>
  )
}

export default UsuariosComponent
