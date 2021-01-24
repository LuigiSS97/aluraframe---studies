class View {
    constructor(elemento) {
        this._elemento = elemento;
    }
    _template(){
        throw new Error('É necessário que se intancie um template');
    }

    update(model) {
        this._elemento.innerHTML = this._template(model)
    }
}