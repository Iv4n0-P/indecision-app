class NAZIV-KLASE{
    constructor (BINDING1, BINDING2, BINDING3, BINDING4) {
        this.BINDINGA = BINDING1 //BINDING MOŽE BITI IDENTIČAN
        this.BINDINGB = BINDING2
        this.BINDINGC = BINDING3
        this.BINDINGD = BINDING4
    }

    NAZIV-METODE () {
        let BINDING = `${this.BINDING} is ${this.BINDING}`

        this.ARRAY.forEach((ARRAY-ITEM) => {
            BINDING += ` ${this.BINDING} likes ${ARRAY-ITEM}.`   
        })
 
        return BINDING
    }
}