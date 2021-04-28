import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../services/api'

export default function NovoCurso(){
      
    const [id, setId]  = useState(null);
    const [descricao, setDescricao]  = useState('');
    const [datainicio, setDataInicio]  = useState('');
    const [datafim, setDataFim]  = useState('');
    const [quantidadeAlunos, seQuantidadeAlunos]  = useState('');
    const [categoria, setCategoria]  = useState('');

    const history = useHistory();

    async function cadastroNovoCurso(e) {
        e.preventDefault();

        const data = {

            descricao,
            datainicio,
            datafim,
            quantidadeAlunos,
            categoria,
        }

        try {
            history.push('/curso')
            
        } catch (err) {
            alert('Erro ao incluir novo curso, tente novamente!')
            
        }

    }


    return(
        <div className="novo-curso-container">
            <div className="content">
                <section className="form">
                    <h1>Adicionar Novo Curso</h1>
                    <p>Inclua as Informações do Novo Curso e clique em adicionar!</p>
                    <Link className="back-link" to="/curso">
                        <FiArrowLeft size={16} color="#251FC5"/>
                        Home
                    </Link>
                </section>
                <form onSubmit={cadastroNovoCurso}>
                    <input 
                        placeholder="Descrição"
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                    />
                    <input 
                        type="Date"
                        value={datainicio}
                        onChange={e => setDataInicio(e.target.value)}
                    />
                    <input 
                        type="Date"
                        value={datafim}
                        onChange={e => setDataFim(e.target.value)}
                    />
                    <input 
                        placeholder="Quantidade de Alunos"
                        value={quantidadeAlunos}
                        onChange={e => seQuantidadeAlunos(e.target.value)}
                    />
                    <input 
                        placeholder="Categoria"
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
                    />

                    <button className="button" type="submit">Adicionar</button>
                    
                </form>
            </div>
        </div>

    );

}