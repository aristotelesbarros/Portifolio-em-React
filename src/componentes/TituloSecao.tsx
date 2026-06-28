import Aparecer from "./Aparecer";

type PropriedadesTitulo = {
  rotulo: string;
  titulo: string;
  descricao?: string;
};

export default function TituloSecao(propriedades: PropriedadesTitulo) {
  return (
    <div className="cabecalho-secao">
      <Aparecer>
        <p className="rotulo">
          <span className="" />
          {propriedades.rotulo}
        </p>
      </Aparecer>

      <Aparecer atraso={80}>
        <h2 className="titulo-secao">{propriedades.titulo}</h2>
      </Aparecer>

      {propriedades.descricao && (
        <Aparecer atraso={140}>
          <p className="descricao-secao">{propriedades.descricao}</p>
        </Aparecer>
      )}
    </div>
  );
}
