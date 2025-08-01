import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../../Components/Footer';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  images: string[];
}

function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch {
        setError('Erro ao carregar detalhes do produto');
      }
    };

    fetchProduct();
  }, [id]);

  if (error) {
    return <p className="text-center text-red-600 mt-10">{error}</p>;
  }

  if (!product) {
    return <p className="text-center mt-10">Carregando...</p>;
  }

  return (
    <main className="p-6 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">{product.title}</h1>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-96 h-96 object-cover rounded shadow mb-6"
      />
      <p className="text-xl text-gray-700 font-semibold mb-2">R$ {product.price}</p>
      <p className="text-gray-600 max-w-xl text-center">{product.description}</p>

      {/* Galeria opcional */}
      <div className="flex flex-wrap gap-4 justify-center mt-8">
        {product.images.map((img, i) => (
          <img key={i} src={img} alt="" className="w-32 h-32 object-cover rounded" />
        ))}
      </div>

      <Footer />
    </main>
  );
}

export default ProductDetail;
