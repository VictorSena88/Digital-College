import { useNavigate } from 'react-router-dom';

const categorias = [
  {
    nome: 'Camisetas',
    imagem: 'https://flamengo.vteximg.com.br/arquivos/ids/172109-473-473/IV6052_FR_Torso_eCom-3-removebg-preview.png.png?v=638731066205230000',
  },
  {
    nome: 'Calças',
    imagem: 'https://i.pinimg.com/736x/3c/a6/06/3ca606abf1afe32ff9762081875d9697.jpg',
  },
  {
    nome: 'Bonés',
    imagem: 'https://cdn.dooca.store/1290/products/bone-baseball-preto-1_620x620+fill_ffffff.jpg?v=1654190970&webp=0',
  },
  {
    nome: 'Tênis',
    imagem: 'https://png.pngtree.com/png-clipart/20241210/original/pngtree-nike-shoes-transparent-png-image_17778783.png',
  },
  {
    nome: 'Headphones',
    imagem: 'https://png.pngtree.com/png-clipart/20240525/original/pngtree-wireless-headphone-isolated-on-transparent-background-png-image_15176787.png',
  },
];

const CategoriasPage = () => {
  const navigate = useNavigate();

  const handleClick = (categoria) => {
    navigate(`/produtos?categoria=${encodeURIComponent(categoria)}`);
  };

  return (
    <div className="min-h-screen bg-purple-100 py-16 px-4">
      <h1 className="text-4xl font-extrabold text-center text-pink-600 mb-2 tracking-wide">
        Categorias:
      </h1>
      <div className="h-1 w-24 bg-pink-600 mx-auto rounded-full mb-12"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {categorias.map((cat) => (
          <div
            key={cat.nome}
            onClick={() => handleClick(cat.nome)}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-105 overflow-hidden flex flex-col"
          >
            <img
              src={cat.imagem}
              alt={cat.nome}
              className="w-full h-56 object-cover rounded-t-2xl"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-700 hover:text-pink-600 transition-colors">
                {cat.nome}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriasPage;




