import React, { Component } from 'react';
import axios from 'axios'
import Main from '../template/main';
import UserCrud from '../user/user-crud';

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
}