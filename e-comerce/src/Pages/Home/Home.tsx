import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../../Components/Footer';
import { useNavigate } from 'react-router';

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
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const skip = (currentPage - 1) * productsPerPage;
                const response = await axios.get(
                    `https://dummyjson.com/products?limit=${productsPerPage}&skip=${skip}`
                );
                setProducts(response.data.products);
                setTotalProducts(response.data.total);
            } catch (error) {
                setError('Não foi possível puxar as informações da API');
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
            <main className="p-5 min-h-screen flex flex-col">
                <div className="flex flex-wrap justify-center gap-5">
                    {products.map((produto) => (
                        <div
                            key={produto.id}
                            onClick={() => navigate(`/produto/${produto.id}`)}
                            className="cursor-pointer border border-gray-300 rounded-lg p-4 w-60 shadow-md bg-white flex flex-col items-center hover:shadow-lg transition"
                        >
                            <img
                                src={produto.thumbnail}
                                alt={produto.title}
                                className="h-54 w-auto object-cover rounded-md mb-3"
                            />
                            <h3 className="text-lg font-semibold text-center">{produto.title}</h3>
                            <p className="font-bold text-gray-800 mt-1">R$ {produto.price}</p>
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="text-center mt-8">
                    <button
                        onClick={handlePrev}
                        disabled={currentPage === 1}
                        className="px-4 py-2 mr-4 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed transition"
                    >
                        ◀ Anterior
                    </button>
                    <span className="mx-4 text-gray-700 font-medium">
                        Página {currentPage} de {totalPages}
                    </span>
                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 ml-4 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed transition"
                    >
                        Próximo ▶
                    </button>
                </div>

                {error && <p className="text-red-600 text-center mt-4">{error}</p>}
            </main>

            <Footer />
        </>
    );
}

export default Home;
