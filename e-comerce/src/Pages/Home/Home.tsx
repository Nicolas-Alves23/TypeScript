import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../../Components/Footer';

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
}

function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string>();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalProducts, setTotalProducts] = useState<number>(0);
    const productsPerPage = 10;

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const skip = (currentPage - 1) * productsPerPage;
                const response = await axios.get(`https://dummyjson.com/products?limit=${productsPerPage}&skip=${skip}`);
                setProducts(response.data.products);
                setTotalProducts(response.data.total); // API retorna total de produtos
            } catch (error) {
                setError("Não foi possível puxar as informações da API");
            }
        };
        fetchAPI();
    }, [currentPage]);

    const totalPages = Math.ceil(totalProducts / productsPerPage);

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <>
            <div style={{ padding: '20px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center',  }}>
                    {products.map((produto) => (
                        <div
                            key={produto.id}
                            style={{
                                border: '1px solid #ccc',
                                borderRadius: '8px',
                                padding: '16px',
                                width: '250px',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                textAlign: 'center',
                                backgroundColor: '#fff',
                            }}
                        >
                            <img
                                src={produto.thumbnail}
                                alt={produto.title}
                                style={{ width: 'auto', height: '250px', objectFit: 'cover', borderRadius: '4px' }}
                            />
                            <h3>{produto.title}</h3>
                            <p style={{ fontWeight: 'bold', color: '#2d2d2d' }}>R$ {produto.price}</p>
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                    <button onClick={handlePrev} disabled={currentPage === 1}>
                        ◀ Anterior
                    </button>
                    <span style={{ margin: '0 20px' }}>
                        Página {currentPage} de {totalPages}
                    </span>
                    <button onClick={handleNext} disabled={currentPage === totalPages}>
                        Próximo ▶
                    </button>
                </div>

                {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
            </div>

            <Footer />
        </>
    );
}

export default Home;
