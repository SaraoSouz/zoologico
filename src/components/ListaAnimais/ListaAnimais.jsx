import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import AnimalRequests from '../../fetch/AnimalRequests';
<<<<<<< HEAD
import { FaTrashAlt } from "react-icons/fa";
=======
import { FaTrash } from "react-icons/fa";

>>>>>>> 76699f1648c0c3000af477888824c7423442b420

function ListaAnimais() {
    const [animais, setAnimais] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/listar-aves');
                if (!response.ok) {
                    throw new Error('Erro ao buscar servidor');
                }
                const listaAnimais = await response.json();
                setAnimais(listaAnimais);
            } catch (error) {
                console.error('Erro: ', error);
            }
        };

        fetchData();
    }, []);


    const deletarAnimal = async (id) => {
        const confirma = window.confirm(`Deseja deletar o animal com id ${id}?`);
        if(confirma){
                if(await AnimalRequests.deletarAnimal(id)) {
                    window.alert('Animal deletado com sucesso');
                    window.location.reload();
        } else{
            window.alert('Erro ao deletar animal');
        }
        }

    }
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Gênero</th>
                        <th>Envergadura</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {animais && animais.length > 0 ? (
                        animais.map(animal => (
                            <tr key={animal.idanimal}>
                                <td>{animal.idanimal}</td>
                                <td>{animal.nomeanimal}</td>
                                <td>{animal.idadeanimal}</td>
                                <td>{animal.generoanimal}</td>
                                <td>{animal.envergadura}</td>
<<<<<<< HEAD
                                <td onClick={() => deletarAnimal(animal.idanimal)}><FaTrashAlt /></td>
=======
                                <td onClick={() => deletarAnimal(animal.idanimal)}><FaTrash /></td>
>>>>>>> 76699f1648c0c3000af477888824c7423442b420
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan='4'>Carregando... Verifique se o servidor está funcionando</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    );
}

<<<<<<< HEAD
export default ListaAnimais;
=======
export default ListaAnimais;
>>>>>>> 76699f1648c0c3000af477888824c7423442b420
