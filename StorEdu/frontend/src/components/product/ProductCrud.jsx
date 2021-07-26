import React, { Component } from 'react';
import axios from 'axios'
import Main from '../template/main';

const headerProps = {
  icon: 'product-hunt',
  title: 'Produtos',
  subtitle: 'Cadastro de Produtos'
}

const baseUrl = 'http://localhost:3001/products'
const initState = {
  product: { description: '', quantity: '', price: '', marca:'' },
  list: []
}

export default class ProductCrud extends Component{

}