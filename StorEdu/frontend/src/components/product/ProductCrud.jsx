import React, { Component } from 'react';
import axios from 'axios'
import Main from '../template/main';


const headerProps = {
  icon: 'product-hunt',
  title: 'Produtos',
  subtitle: 'Cadastro de Produtos'
}

const baseUrl = 'http://localhost:3001/products'
const initialState = {
  product: { description: '', quantity: '', price: '', marca:'' },
  list: []
}

export default class ProductCrud extends Component{
  state = { ...initialState }

  componentWillMount(){
    axios(baseUrl).then(resp => {
      this.setState({ list: resp.data });
    });
  }

  clear(){
    this.setState({product: initialState.product});
  }

  save(){
    const product = this.state.product;
    product.quantity = parseInt(product.quantity, 10);
    product.price = parseFloat(product.price);
    const method = product.id ? 'put' : 'post';
    const url = product.id ? `${baseUrl}/${product.id}` : baseUrl;
    axios[method](url, product).then(resp => {
      const list = this.getUpdateList(resp.data);
      this.setState({ product: initialState.product, list });
    });
   }

  getUpdateList(product, add = true){
    const list = this.state.list.filter(p => p.id !== product.id)
    if(add) list.unshift(product)
    return list;
  }

  updateField(event){
    const product = { ...this.state.product }
    product[event.target.name] =  event.target.value;
    this.setState({ product });
  }

  renderForm() {
    /**jsx que ira renderizar o formulário */
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            {/*  Formulário */}
            <div className="form-group">
              <label htmlFor="name">Descrição</label>
              <input type="text" className="form-control" name="description"
                value={this.state.product.description}
                onChange={e => this.updateField(e)}
                placeholder="Digite o descrição.."/>
            </div>

            <div className="form-group">
              <label htmlFor="name">Quantidade</label>
              <input type="text" className="form-control" name="quantity"
                value={ this.state.product.quantity }
                onChange={e => this.updateField(e)}
                placeholder="Digite a quantidade.."/>
            </div>

            <div className="form-group">
              <label htmlFor="name">Preço</label>
              <input type="text" className="form-control" name="price"
                value={this.state.product.price}
                onChange={e => this.updateField(e)}
                placeholder="Digite o preço.." />
            </div>

            <div className="form-group">
              <label htmlFor="name">Marca</label>
              <input type="text" className="form-control" name="brand"
                value={this.state.product.brand}
                onChange={e => this.updateField(e)}
                placeholder="Digite o marca.." />
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

  load(product){
    this.setState({ product });
  }

  remove(product){
    axios.delete(`${baseUrl}/${product.id}`).then(resp => {
      const list = this.getUpdateList(product, false)
      this.setState({ list });
    });
  }

  renderTable(){
    return(
      <table className="table mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th>Marca</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>{ this.renderRows() }</tbody>
      </table>
    );
  }

  renderRows(){
    return this.state.list.map( product => {
      return(
        <tr key={ product.id}>
          <td>{product.id}</td>
          <td>{product.description}</td>
          <td>{product.quantity}</td>
          <td>{product.price}</td>
          <td>{product.brand}</td>
          <td>
            <button
              className="btn btn-warning" onClick={() => this.load(product)}>
              <i className="fa fa-product-hunt"></i>
            </button>
            <button
              className="btn btn-danger ml-2"
              onClick={() => this.remove(product)}>
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