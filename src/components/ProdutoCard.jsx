import React from 'react';

const ProdutoCard = ({ id, nome, preco, imagem, descricao, onExcluir }) => {
  // Sua foto de servidor como fallback oficial
  const imagemPadrao = "https://images.pexels.com/photos/5050305/pexels-photo-5050305.jpeg?auto=compress&cs=tinysrgb&w=500";

  return (
    <div className="card-estilizado">
      {/* Botão de excluir minimalista e pequeno */}
      <button 
        onClick={onExcluir}
        className="btn-excluir"
        title="Remover Ativo"
      >
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
      </button>

      <div style={imageContainerStyle}>
        <img 
          src={imagem || imagemPadrao} 
          alt={nome} 
          onError={(e) => { e.target.src = imagemPadrao }} 
          style={imageStyle} 
        />
      </div>
      
      <div style={contentStyle}>
        <h3 style={titleStyle}>{nome}</h3>
        <p style={descStyle}>{descricao}</p>
        <div style={footerStyle}>
          <span style={priceLabel}>VALOR DO ATIVO</span>
          <strong style={priceValue}>R$ {preco}</strong>
        </div>
      </div>
    </div>
  );
};

// Estilização interna compacta
const imageContainerStyle = {
  width: '100%',
  height: '140px', 
  overflow: 'hidden',
  borderRadius: '6px',
  backgroundColor: '#f0f2f5'
};

const imageStyle = { width: '100%', height: '100%', objectFit: 'cover' };
const contentStyle = { marginTop: '10px' };
const titleStyle = { fontSize: '0.95rem', margin: '0 0 4px 0', color: '#2c3e50', fontWeight: 'bold' };
const descStyle = { fontSize: '0.8rem', color: '#7f8c8d', marginBottom: '8px', minHeight: '30px' };
const footerStyle = { display: 'flex', flexDirection: 'column', borderTop: '1px solid #eee', paddingTop: '8px' };
const priceLabel = { fontSize: '0.6rem', color: '#95a5a6', fontWeight: 'bold' };
const priceValue = { fontSize: '1rem', color: '#27ae60', marginTop: '1px' };

export default ProdutoCard;