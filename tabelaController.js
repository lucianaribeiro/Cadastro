function tabelaController(){

  this.medicamentos = document.getElementById('medicamentos');

  this.createRow = function(medicamento, row){

    var row = document.createElement('tr');
    row.appendChild(this.runColumnNome(medicamento));
    row.appendChild(this.runColumnRegistro(medicamento));
    row.appendChild(this.runColumnTipo(medicamento));
    row.appendChild(this.runColumnCategoria(medicamento));
    row.appendChild(this.runColumnComplemento());
    row.appendChild(this.runColumnAcoes(row, medicamento));

    return row;
  };

  this.atualiza = function(medicamento,row){
    if(row){
      this.medicamentos.replaceChild(this.createRow(medicamento),row);
    }
    else{
      this.medicamentos.appendChild(this.createRow(medicamento));
    }
  };

  this.runColumnNome = function(medicamento){
    var column = document.createElement('td');
    column.innerHTML = medicamento.nome;
    return column;
  };
  this.runColumnRegistro = function(medicamento){
    var column = document.createElement('td');
    column.innerHTML = medicamento.registro;
    return column;
  };
  this.runColumnTipo = function(medicamento){
    var column = document.createElement('td');
    column.innerHTML = medicamento.controlado;
    return column;
  };
  this.runColumnCategoria = function(medicamento){
    var column = document.createElement('td');
    column.innerHTML = medicamento.categoria;
    return column;
  };
  this.runColumnComplemento = function(){
    var column = document.createElement('td');
    return column;
  };
  this.runColumnAcoes = function(row,medicamento){
    var column = document.createElement('td');
    column.appendChild(this.runButtonAlterar(row,medicamento));
    column.appendChild(this.runButtonExcluir(row));
    return column;
  };
  this.runButtonAlterar = function(row, medicamento){
    var btn = document.createElement('button');
    btn.innerHTML = 'Alterar';
    btn.onclick = function(){
      formulario.carrega(row,medicamento);
    }
    return btn;
  };
  this.runButtonExcluir = function(row){
    var btn = document.createElement('button');
    btn.innerHTML = 'Excluir';
    btn.onclick = function(){
      row.parentElement.removeChild(row);
    }
    return btn;
    };
}
