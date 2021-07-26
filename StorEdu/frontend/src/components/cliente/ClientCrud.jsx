import React, { Component } from 'react';
import axios from 'axios'
import Main from '../template/main';


const headerProps = {
  icon: 'fa-users',
  title: 'Clientes',
  subtitle: 'Cadastro de Clientes'
}

const baseUrl = 'http://localhost:3001/clients'
const initialState = {
  client: { name: '', description: '', contact: '', country: '' },
  list: []
}

export default class ClientCrud extends Component {
  state = { ...initialState }

  componentWillMount() {
    axios(baseUrl).then(resp => {
      this.setState({ list: resp.data });
    });
  }

  clear() {
    this.setState({ client: initialState.client });
  }

  save() {
    const client = this.state.client;
    client.quantity = parseInt(client.quantity, 10);
    client.price = parseFloat(client.price);
    const method = client.id ? 'put' : 'post';
    const url = client.id ? `${baseUrl}/${client.id}` : baseUrl;
    axios[method](url, client).then(resp => {
      const list = this.getUpdateList(resp.data);
      this.setState({ client: initialState.client, list });
    });
  }

  getUpdateList(client, add = true) {
    const list = this.state.list.filter(p => p.id !== client.id)
    if (add) list.unshift(client)
    return list;
  }

  updateField(event) {
    const client = { ...this.state.client }
    client[event.target.name] = event.target.value;
    this.setState({ client });
  }

  renderForm() {
    /**jsx que ira renderizar o formulário */
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            {/*  Formulário */}
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input type="text" className="form-control" name="name"
                value={this.state.client.name}
                onChange={e => this.updateField(e)}
                placeholder="Digite o nome.." />
            </div>

            <div className="form-group">
              <label htmlFor="name">Descrição</label>
              <input type="text" className="form-control" name="description"
                value={this.state.client.description}
                onChange={e => this.updateField(e)}
                placeholder="Digite a descrição.." />
            </div>

            <div className="form-group">
              <label htmlFor="name">Contato</label>
              <input type="text" className="form-control" name="contact"
                value={this.state.client.contact}
                onChange={e => this.updateField(e)}
                placeholder="Digite o contato.." />
            </div>

            <div className="form-group">
              <label htmlFor="name">País</label>
              <input type="text" className="form-control" name="country"
                value={this.state.client.country}
                onChange={e => this.updateField(e)}
                placeholder="Digite o País.." />
            </div>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-12 d-flex justify-content end">
            <button className="btn btn-primary"
              onClick={e => this.save(e)}>Salvar</button>
            <button className="btn btn-secondary ml-2"
              onClick={e => this.save(e)}>Cancelar</button>
          </div>
        </div>
      </div>
    );
  }

  load(client) {
    this.setState({ client });
  }

  remove(client) {
    axios.delete(`${baseUrl}/${client.id}`).then(resp => {
      const list = this.getUpdateList(client, false)
      this.setState({ list });
    });
  }

  renderTable() {
    return (
      <table className="table mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Contato</th>
            <th>País</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>{this.renderRows()}</tbody>
      </table>
    );
  }

  renderRows() {
    return this.state.list.map(client => {
      return (
        <tr key={client.id}>
          <td>{client.id}</td>
          <td>{client.name}</td>
          <td>{client.description}</td>
          <td>{client.contact}</td>
          <td>{client.country}</td>
          <td>
            <button
              className="btn btn-warning" onClick={() => this.load(client)}>
              <i className="fa fa-pencil"></i>
            </button>
            <button
              className="btn btn-danger ml-2"
              onClick={() => this.remove(client)}>
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <Main {...headerProps}>
        {this.renderForm()}
        {this.renderTable()}
      </Main>
    );
  }
}