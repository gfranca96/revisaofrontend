import Section from "../components/Section"

export default function Representante() {
    return (
        <Section Titulo="Cadastro de Representante">
            <div className="form-repr col-md-6">
                <div className="col-md-8">
                    <form action="">
                        <div className="form-group my-3">
                            <label htmlFor="name">Nome Completo</label>
                            <input type="text" name="name" className="form-control" placeholder="Nome Completo" />
                        </div>

                        <div className="form-group my-3">
                            <label htmlFor="name">CPF/CNPJ</label>
                            <input type="text" name="cpj-cnpj" className="form-control" placeholder="CPF/CNPJ" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">Data de Nascimento</label>
                            <input type="date" name="dt-nasc" className="form-control" placeholder="Data de Nascimento" />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="name">CEP</label>
                            <input type="text" name="cep" className="form-control" placeholder="CEP" />
                        </div>

                        <div className="form-group my-3">
                            <label htmlFor="name">Logradouro</label>
                            <input type="text" name="logradouro" className="form-control" placeholder="Rua, Quadra, Bloco" />
                        </div>

                        <div className="form-group my-3">
                            <label htmlFor="name">Bairro</label>
                            <input type="text" name="bairro" className="form-control" placeholder="Bairro" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">Cidade</label>
                            <input type="text" name="cidade" className="form-control" placeholder="Cidade" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">Estado</label>
                            <input type="text" name="uf" className="form-control" placeholder="UF" />
                        </div>
                    </form>
                </div>
            </div>
        </Section>
    )
}