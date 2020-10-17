//Definimos a classe 
class Observable {

    // cada instância da classe Observer
    // começa com um array vazio de observadores/observers
     // que reagem a uma mudança de estado
    constructor() {
        this.observers = [];
    }

    // adicione a capacidade de inscrever um novo objeto / Elemento DOM
    // essencialmente, adicione algo ao array de observadores
    subscribe(item) {
        this.observers.push(item);
    }

    //adicionando a capacidade de cancelar a inscrição 
    //essencialmente remove algum item do array
    unsubscribe(item) {
        this.observers = this.observers.filter(itemAntigos => itemAntigos !== item);
    }

    //atualizada todos os inscritos e passa algum dados para ele
    notify(data){
        this.observers.forEach(observer => observer(data));
    }

}

module.exports = Observable;