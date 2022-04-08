import {
    Button,
    Form,
    Col,
    Label,
    Row,
    FormGroup,
    Input,
    FormFeedback,
    FormText,
    Card,
    CardBody,
} from "reactstrap";
function refreshPage(){ 
    window.location.reload(); 
}
import {useState} from 'react'

const Formulario: React.FC = () => {
const []= useState('')
  const [nomeFilial, setNome] = useState<string>('')
  const [email1, setEmail] = useState<string>('')
  const [adress1, setAdress] = useState<string>('')
  const [contato, setContato] = useState<string>('')
  const submit = () =>{
    const logar = {
      nomeFilial, email1, adress1, contato
    }
    //testando logar, lembrar de apagar depois
    console.log (logar)
  }

    return (
        <div className="container">
            <form method="post">
                <div className="row">
                    <div className='col-md-12'>
                        <h2>WEG EQUIPAMENTOS S.A - MOTORES</h2>
                        <div>
                            <Label for="Nome da Filial">Nome da Filial</Label>
                            <Input type="text" 
                            className="form-control" 
                            placeholder="Nome da Filial" 
                            id="nomefilial" value={nomeFilial}
                            onChange = {event => setNome(event.target.value)}
                            
                            />
                        </div>
                        <div className="col-md-6">
                            <Label for="E-mail">Email</Label>
                            <Input type="email" className="form-control" placeholder="E-mail" id="email1" value={email1}
                            onChange = {event => setEmail(event.target.value)}/>
                        </div>
                        <div className="col-md-6">
                            <Label for="Contato">Contato</Label>
                            <Input type="text" className="form-control" placeholder="Contato" id="telefone" value={contato}
                            onChange = {event => setContato(event.target.value)}/>
                        </div>
                        <div>
                            <Label for="Endereço da filial">Endereço da filial</Label>
                            <Input type="text" className="form-control" placeholder="Endereço" value={adress1}
                            onChange = {event => setAdress(event.target.value)}/>
                        </div>

                        <h2 className="mt-3">DADOS DA EMPRESA</h2>

                        <div>
                            <Label for="Razão Social">Razão Social</Label>
                            <Input type="text" className="form-control" placeholder="Razao Social" />
                        </div>
                        <div>
                            <Label for="Nome de Fantasia">Nome de Fantasia</Label>
                            <Input type="text" className="form-control" placeholder="Nome de Fantasia" />
                        </div>
                        <div>
                            <Label for="Endereço">Endereço</Label>
                            <Input type="text" className="form-control" placeholder="Endereço" />
                        </div>
                        <div className="col-md-4">
                            <Label for="CNPJ">CNPJ</Label>
                            <Input type="text" className="form-control" placeholder="CNPJ" />
                        </div>
                        <div>
                            <Label for="inscrição estadual">Inscrição estadual</Label>
                            <Input type="text" className="form-control" placeholder="Inscrição Estadual" />
                        </div>
                        <div>
                            <Label for="Website">Website</Label>
                            <Input type="url" className="form-control" placeholder="Website" />
                        </div>

                        <h2>ESCOPO DE CAPACIDADE TÉCNICA</h2>
                        <div>
                            <select>
                                <option selected> Escopo de Capacidade Técnica</option>
                                <option value="1">Motores elétricos CA/BT até IEC 132 / NEMA 213/5</option>
                                <option value="2">Motores elétricos CA/BT até IEC 200 / NEMA 324/6</option>
                                <option value="3">Motores elétricos CA/BT até IEC 355 / NEMA 586/7</option>
                                <option value="4">Motores elétricos CA/BT até IEC 450 / NEMA 7006/10</option>
                            </select>
                        </div>
                        <h2>Características Complementares</h2>
                        <div>
                            <select>
                                <option selected>Escolha qual a capacidade técnica: </option>
                                <option value="1">Motores elétricos CA/BT Ex (Atmosferas Explosivas)</option>
                                <option value="2">Motores elétricos CA/AT (Alta Tensão)</option>
                            </select>
                        </div>
                        <div>
                        <Button onClick={submit} className='mt-4'>Submit</Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Formulario;
