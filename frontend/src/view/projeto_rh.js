import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

import perfil from "./imagens/perfil.jpg";
import line from "./imagens/line.svg";
import Logo from "./imagens/logo.svg";
import user from "./imagens/user.svg";

import './css/projeto_dev.css';
class projeto_rh extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listEmployee: []
        }
    }
    componentDidMount() {
        const url = "http://localhost:3000/users/projetos_list";
        axios.get(url)
            .then(res => {
                if (res.data.sucess) {
                    const data = res.data.data;
                    this.setState({ listEmployee: data });
                } else {
                    alert("Error Web Service!");
                }
            })
            .catch(error => {
                alert(error);
            });
    }

    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <nav class="navbar">
                        <Link to="/home_rh"><img class="img1" src={Logo} /></Link>
                        <div class="nav_list">
                            <ul>
                                <li><Link to="/utilizadores_rh">Utilizadores</Link></li>
                                <li><Link to="/projeto_rh">Projetos</Link></li>
                                <li>
                                    <div class="dropdown" >
                                        <a class="dropbtn">Nome <img class="user" src={user}/></a>
                                        <div class="dropdown-content">
                                            <Link to="/recursoshumanos">Perfil</Link>
                                            <Link to="/">Terminar Sessão</Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-lg-12 col-md-12 col-xl-12">
                        <h2>Projetos em desenvolvimento</h2>
                    </div>

                    <div class="conteudo col-sm-12 col-lg-12 col-md-12 col-xl-12">

                        <div class="card">

                            <form class="form-inline">

                                <div class="form-group mx-sm-3 mb-2">
                                    <input type="search" class="form-control" id="inputPassword2" placeholder="Procurar" />
                                </div>
                                <button type="submit" class="btn1 btn-primary mb-2">Procurar</button>
                            </form>

                            <table class="table">

                                <thead class="thead-light">
                                    <tr>
                                        <th scope="col"> </th>
                                        <th scope="col">Nome Projecto</th>
                                        <th scope="col">Data Inicio</th>
                                        <th scope="col">Data Fim</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.loadFillData()}
                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>
            </div>
        );
    }

    loadFillData() {
        return this.state.listEmployee.map((data, index) => {
            return (


                <tr key={index}>
                    <th scope="row">{data.ID_Projeto}</th>
                    <td><h6>{data.NomeProjeto}</h6> <div><a href="home_2_dev.html"><button type="button" class="btn btn-info"><Link to={"/projetos_info_rh/" + data.ID_Projeto} >Info</Link></button></a></div></td>
                    <td>{data.DataInicio}</td>
                    <td>{data.DataFim}</td>
                </tr>
            )
        });
    }
}
export default projeto_rh; 