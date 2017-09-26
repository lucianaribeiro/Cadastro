

function tabelaController(){
  this.medicamentos = document.getElementById('medicamentos');

  this.createRow = function(medicamento){
    var row = document.createElement('tr');

    row.appendChild(this.columnNome(medicamento));
    row.appendChild(this.columnRegistro(medicamento));
    row.appendChild(this.columnTipo(medicamento));
    row.appendChild(this.columnCategoria(medicamento));
    row.appendChild(this.columnComplemento());
    row.appendChild(this.columnAcoes(row, medicamento));
    return row;
  };
  this.atualizaTabela = function(medicamento, row){
    if(row){
      this.medicamentos.replaceChild(this.criarRow(medicamento), row);
    }
    else{
    this.medicamentos.appendChild(this.createRow(medicamento));
    }


  };

  this.columnNome = function(medicamento){
    var column = document.createElement('td');
    column.innerHTML = medicamento.nome;
    return column;
  };
  this.columnRegistro = function(medicamento){
    var column = document.createElement('td');
    column.innerHTML = medicamento.registro;
    return column;
  };
  this.columnTipo = function(medicamento){
    var column = document.createElement('td');
    column.innerHTML = medicamento.controlado;
    return column;
  };
  this.columnCategoria = function(medicamento){
    var column = document.createElement('td');
    column.innerHTML = medicamento.categoria;
    return column;
  };
  this.columnComplemento = function(){
    var column = document.createElement('td');
    return column;
  };
  this.columnAcoes = function(row, medicamento){
    var column = document.createElement('td');
    return column;
  };
  this.createbtnAlterar = function(row, medicamento){
    var btn = document.createElement('button');
    column.innerHTML='Alterar';
    return btn;
  };
  this.createbtnExcluir = function(row){
    var btn = document.createElement('button');
    column.innerHTML='Excluir';
    return btn;
  };
}
