import "../styles/Menu.css";

const Menu = () => {
  return (
    <>
      <div className="menu">
        <h2 className="menu-group-heading">Gostosuras ou Travessuras?</h2>
        <div className="menu-group">
          <div className="menu-item">
            <img
              src="https://www.thursdaynightpizza.com/wp-content/uploads/2021/10/halloween-spider-web-pizza-featured-image.png"
              alt="Black Placeholder"
              className="menu-item-img"
            />
            <div className="menu-item-text">
              <h3 className="menu-item-heading">
                <span className="menu-item-name">Pizza 4 queijos</span>
              </h3>
              <p className="menu-item-desc">
                Uma deliciosa pizza com fermentação amaldiçoada por anos, apenas
                os mais malignos conseguirão digerí-la!
              </p>
            </div>
          </div>
          <div className="menu-item">
            <img
              src="https://www.jornalosemanario.com.br/wp-content/uploads/2020/10/Pizza-de-Halloween.jpg"
              alt="Black Placeholder"
              className="menu-item-img"
            />
            <div className="menu-item-text">
              <h3 className="menu-item-heading">
                <span className="menu-item-name">Pizza de Margherita</span>
              </h3>
              <p className="menu-item-desc">
                Sim, outra pizza sem carne de animais indefesos, mas com muito,
                muito molho feito à base de sangue de agressores de animais e
                ervas do campo.
              </p>
            </div>
          </div>
          <div className="menu-item">
            <img
              src="https://www.easycookingwithmolly.com/wp-content/uploads/2019/10/Witches-Blood-Brew-Cocktail-1-480x480.jpg"
              alt="Black Placeholder"
              className="menu-item-img"
            />
            <div className="menu-item-text">
              <h3 className="menu-item-heading">
                <span className="menu-item-name">Sangue de Virgens</span>
              </h3>
              <p className="menu-item-desc">
                Uma bebida misteriosa vermelha à base de sangue de virgens
                inocentes e puras tal qual o Miguel, a Bianca e a Luisa.
              </p>
            </div>
          </div>
          <div className="menu-item">
            <img
              src="https://img.freepik.com/fotos-premium/deliciosa-variedade-de-doces-de-halloween-guloseimas-assustadoras-para-doces-sustos_982554-1062.jpg"
              alt="Black Placeholder"
              className="menu-item-img"
            />
            <div className="menu-item-text">
              <h3 className="menu-item-heading">
                <span className="menu-item-name">Gostosuras</span>
              </h3>
              <p className="menu-item-desc">
                Brigadeiro, docinhos travessos, petiscos e tudo o que amigos
                góticos gostam de ingerir enquanto fazem seu ritual anual!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
