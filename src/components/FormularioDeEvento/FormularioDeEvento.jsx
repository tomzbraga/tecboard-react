import "./formulario-de-evento.style.css";
import { CampoDeEntrada } from "../CampoDeEntrada/CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario/CampoDeFormulario";
import { TituloFormulario } from "../TituloFormulario/TituloFormulario";
import { Label } from "../Label/Label";

export function FormularioDeEnvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">Qual o nome do evento?</Label>
          <CampoDeEntrada
            type="text"
            id="nomeEvento"
            placeholder="Summer dev hits"
            name="nomeEvento"
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do evento</Label>
          <CampoDeEntrada type="date" id="dataEvento" name="dataEvento" />
        </CampoDeFormulario>
      </div>
    </form>
  );
}
