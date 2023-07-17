import React from "react";
import "./styles.css";

export default function index() {
  return (
    <>
      <div className="overlay"></div>

      <div className="layer">
        <div className="ModalLogin">
          <a
            href="javascript:void(0)"
            className="close"
            onclick="closeLightbox();"
          >
            X
          </a>

          <div className="login_left">
            <h2>Login</h2>

            <div>
              <label for="email">Email:</label>
              <input type="text" id="email" name="email" tabindex="1" />
            </div>

            <div>
              <input
                id="cmdOK"
                class="verde"
                type="button"
                value="OK"
                tabindex="3"
              />
              <label for="password">Senha:</label>
              <input type="password" id="senha" name="senha" tabindex="2" />
            </div>

            <a className="cmdEsqueciMinhaSenha" href="javascript:void(0)">
              esqueci minha senha
            </a>
          </div>

          <div className="cadastrese_right">
            <h2 class="CadastreseJa">cadastre-se já</h2>

            <input
              className="cmdCadastrese"
              type="button"
              value="Ainda não tenho cadastro"
            />
          </div>
        </div>
      </div>
    </>
  );
}
