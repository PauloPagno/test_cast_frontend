import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FiPower , FiEdit , FiTrash2 } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import api from '../../services/api'

import './styles.css'

export default function Curso(){

    const [curso, setCurso] = useState();

    const history = useHistory();

    useEffect(() => {
      api.get('curso', {
        
      
    }).then(response => {
        setCurso(response.data.embedded.cursovoes)
    })  
}) 
    return (
        <div className="curso-container">
            <header>
                <span>Bem Vindo</span>
                <Link className="button" to="curso/novo">Adicionar novo curso</Link>
                <button type="button">
                        <FiPower size={20} color="#251FC5"/>
                </button>                
                </header>

                <h1>Lista de Cursos</h1>
                <ul>
                   {curso.map(curso => (

                        <li>
                            <strong>Descrição</strong>
                            <p>{curso.descricao}</p>
                            <strong>Data Inicio}</strong>
                            <p>{curso.datainicio}</p>
                            <strong>Data Término</strong>
                            <p>{curso.datafim}</p>
                            <strong>Quantidade de Alunos</strong>
                            <p>{curso.quantidadeAlunos}</p>
                            <strong>Categoria</strong>
                            <p>{curso.categoria}</p>

                            <button type="button">
                                <FiEdit size={20} color="#251FC5"/>
                            </button>

                            <button type="button">
                                <FiTrash2 size={20} color="#251FC5"/>
                            </button>
                        </li>
                   ))}
                </ul>
        </div>
    
    );
}