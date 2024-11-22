import React from 'react';

const About = () => {
  return (
    <div className="AboutUs" style={styles.background}>
      <div style={styles.modal}>
        <div style={styles.content}>
          {/* Título Quem Somos */}
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Quem Somos</h1>
          <p style={{ textAlign: 'justify', fontSize: '1.2rem', lineHeight: '1.8' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices aliquam urna nec eleifend.
            Praesent ultrices augue maximus neque efficitur pharetra. Pellentesque in sapien consequat, molestie
            nunc eu, congue nulla. Fusce venenatis nisl neque, ut pulvinar nulla imperdiet sit amet. Aliquam vel dolor
            at urna facilisis dictum vitae ut justo. Praesent quis nulla vel tortor hendrerit ornare. Aenean imperdiet
            semper egestas. Vivamus mi lorem, tincidunt sit amet neque vel, ornare ullamcorper ipsum. Donec molestie
            elit in justo cursus, eget ultricies urna tempus.
          </p>

          {/* Título Contatos */}
          <h1 style={{ fontSize: '2.5rem', marginTop: '40px', marginBottom: '10px' }}>Contatos</h1>

          {/* Informações de Contato */}
          <div style={styles.contact}>
            <p>(55) 5 5555-5555</p>
            <p>ajudasemfronteiras.org.br</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  background: {
    width: '100%',
    height: '100vh',
    backgroundImage: `url('/imagens/fundo_cadastros.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: 'rgba(38, 38, 38, 0.8)',
    borderRadius: '15px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%', // Largura maior
    maxWidth: '900px',
    padding: '40px', // Espaçamento interno
  },
  content: {
    textAlign: 'center',
    maxWidth: '800px',
  },
  contact: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    fontSize: '1.5rem',
  },
};

export default About;
