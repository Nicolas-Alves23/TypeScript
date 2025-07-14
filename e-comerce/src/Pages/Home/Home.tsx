import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Footer from '../../Components/Footer';
import Card from '../../Components/Card';

function Home() {
    const url: string = "https://dummyjson.com/products";
    const [banco, setBanco] = useState<string>();
    const [error, setError] = useState<string>();
    const lista = Array.from({length: 15}, (_, i) => i);
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const response = await axios.get("https://dummyjson.com/products");
                const salvar = lista.map((num) => response.data.products[num]);
                setBanco(salvar);
            } catch (error) {
                setError("não foi possivel puxar as informações da api ");
            }
        }
        fetchAPI()
    }, []);

    useEffect (() => {console.log(banco)}, [banco])

    return (
        <>
           {/* {banco.map((product) => <Card  )} */}
            <Footer/>
        </>
    );
}

export default Home;