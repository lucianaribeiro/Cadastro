/*
NomeComercial: input
NumeroRegistro: input
Controlado: radio button
Categoria: combo box
*Referencia: input
*Subcategoria: combo box
Cadastrar: button
Limpar: button
*/

function formularioController(){

    this.formMed = document.getElementById('formulario');
    this.inputNome = document.getElementById('nome');
    this.inputRegistro = document.getElementById('numeroRegistro');
    this.inputControlado = document.getElementById('controlado');
    this.inputCategoria = document.getElementById('categoria');
    this.buttonCadastro = document.getElementById('btnCadastrar');
    this.buttonLimpar = document.getElementById('btnLimpar');

    this.row = null;

    this.recebeDados = function(){
      var controlado = document.querySelector('input[name="controlado"]:checked');
      return{
          nome: this.inputNome.value,
          registro: this.inputRegistro.value,
          controlado: controlado ? controlado.value : '',
          categoria: this.inputCategoria.value
      };
    };

    this.carregaDados = function(medicamento){
      var controlado = document.querySelector('input[name="controlado"][value="'+ medicamento.controlado +'"]');
      this.inputNome.value = medicamento.nome;
      this.inputRegistro.value = medicamento.registro;
      controlado.checked=true;
      this.inputCategoria.value = medicamento.categoria;
    };
    this.carrega = function(row,medicamento){
      this.row = row;
      formulario.carregaDados(medicamento);
      this.buttonCadastro.innerHTML = 'Salvar';
      this.buttonLimpar.innerHTML = "Cancelar";
    };

    this.buttonCadastro.onclick = function(){
      formulario.salvar();
      formulario.limpar();
    };
    this.buttonLimpar.onclick = function(){
      formulario.limpar();
    };
    this.salvar = function(){
      var medicamento = this.recebeDados();
      tabela.atualiza(medicamento, this.row);
      this.buttonCadastro.innerHTML = 'Cadastrar';
      this.buttonLimpar.innerHTML = "Limpar";
    };
    this.limpar = function(){
      this.formMed.reset();
    };
}
