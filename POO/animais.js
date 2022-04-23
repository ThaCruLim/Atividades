class animais {

        constructor(tipo, sexo, raça, cor, idade){
            this.tipo = tipo,
            this.sexo = sexo,
            this.raça = raça,
            this.cor = cor,
            this.idade = idade
    }

    descrever() {
        console.log(JSON.stringify(this)); 
      }
}

module.exports=animais