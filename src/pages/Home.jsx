import React, { useState, useEffect } from 'react';
import ProdutoCard from '../components/ProdutoCard';
import '../assets/App.css';

const Home = () => {
  // Requisito 3: State para armazenar a lista de produtos
  const [produtos, setProdutos] = useState([]);
  
  // Requisito 5: State para controlar o "carregando..."
  const [carregando, setCarregando] = useState(true);

  // Requisito 4: Formulário controlado (campos obrigatórios: nome, preço e descrição)
  const [form, setForm] = useState({ 
    nome: '', 
    preco: '', 
    descricao: '', 
    imagem: '' 
  });

  // Requisito 5: Simulação de API com useEffect e setTimeout
  useEffect(() => {
    const carregarDados = setTimeout(() => {
      setProdutos([
        { 
          id: 1, 
          nome: "Servidor Rack Dell", 
          preco: "55.000", 
          descricao: "PowerEdge R740 - Datacenter A", 
          imagem: "https://images.pexels.com/photos/5050305/pexels-photo-5050305.jpeg?auto=compress&cs=tinysrgb&w=500" 
        },
        { 
          id: 2, 
          nome: "Switch Cisco 48p", 
          preco: "15.900", 
          descricao: "Catalyst 9300 - Core Network", 
          imagem: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500" 
        }
      ]);
      setCarregando(false); // Finaliza o estado de carregamento
    }, 2000); // 2 segundos de simulação

    return () => clearTimeout(carregarDados);
  }, []);

  // Requisito 4: Função para adicionar novos produtos via formulário
  const handleAddProduto = (e) => {
    e.preventDefault();
    
    // Cria o novo ativo com um ID único
    const novoAtivo = { 
      ...form, 
      id: Date.now() 
    };

    setProdutos([...produtos, novoAtivo]);
    
    // Limpa o formulário após o envio
    setForm({ nome: '', preco: '', descricao: '', imagem: '' });
  };

  // Função para excluir o ativo (sua solicitação extra)
  const excluirProduto = (id) => {
    setProdutos(produtos.filter(p => p.id !== id));
  };

  return (
    <div className="container">
      <h1>📊 Gestão de Ativos TI</h1>

      {/* Requisito 4: Formulário de Cadastro */}
      <div className="form-container">
        <h3>🚀 Cadastrar Novo Equipamento</h3>
        <form onSubmit={handleAddProduto} className="form-grid">
          <input 
            placeholder="Nome do Ativo (Obrigatório)" 
            value={form.nome} 
            onChange={e => setForm({...form, nome: e.target.value})} 
            required 
          />
          <input 
            placeholder="Preço R$ (Obrigatório)" 
            value={form.preco} 
            onChange={e => setForm({...form, preco: e.target.value})} 
            required 
          />
          <input 
            placeholder="Descrição/Local (Obrigatório)" 
            value={form.descricao} 
            onChange={e => setForm({...form, descricao: e.target.value})} 
            required 
          />
          <input 
            placeholder="URL da Imagem (Opcional)" 
            value={form.imagem} 
            onChange={e => setForm({...form, imagem: e.target.value})} 
          />
          <button type="submit">Adicionar Ativo</button>
        </form>
      </div>

      {/* Requisito 5: Mensagem de Carregando */}
      {carregando ? (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <div className="loader"></div>
          <p>Sincronizando Datacenter...</p>
        </div>
      ) : (
        /* Requisito 3: Listagem Dinâmica com .map() */
        <div className="products-grid">
          {produtos.map(produto => (
            <ProdutoCard 
              key={produto.id} 
              {...produto} 
              onExcluir={() => excluirProduto(produto.id)} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;