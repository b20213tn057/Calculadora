class Display{
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.valorActual = '';
        this.valorAnterior = '';
    }
    agregarNumero(numero){
        if(numero == '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }
    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = this.valorAnterior
    }
    borrar(){
        this.valorActual = this.valorActual.toString().slice(0, -1);
    }
    borrarTodo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.imprimirValores();
    }
calcular(){
    const valorActual = parseFloat(this.valorAnterior);
    const valorAnterior = parseFloat(this.valorAnterior);
    if(isNaN(valorActual) || isNaN(valorActual)) return
    this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    
}

}