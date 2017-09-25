function formularioController(){

  this.formMed = document.getElementById('formMed');
  this.inputNome = document.getElementById('nome');
  this.inputRegistro = document.getElementById('numeroRegistro');
  this.inputControlado = document.getElementById('controlado');
  this.inputCategoria = document.getElementById('categoria');
  this.btnCadastrar = document.getElementById('btnCadastrar');
  this.btnLimpar = document.getElementById('btnLimpar');

  this.row = null;

  this.dados = function(){
    var controlado = document.querySelector('input[name="controlado"]:checked');
    return {
      nome: this.inputNome.value,
      registro: this.inputRegistro.value,
      controlado: controlado ? controlado.value : '',
      categoria: this.inputCategoria.value
    };
  };
}
