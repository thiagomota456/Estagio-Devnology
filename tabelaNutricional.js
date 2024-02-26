class DadoNutricional {
    constructor() {
        this.comoVendido = null;
        this.porPorcao = null;
        this.comparadoA = null;
    }
}

class DadosNutricionais {
    constructor() {
        this.labels = new DadoNutricional();
        this.energia = new DadoNutricional();
        this.gordurasLipidos = new DadoNutricional();
        this.gordurasLipidosAcidosGordosSaturados = new DadoNutricional();
        this.carboidratos = new DadoNutricional();
        this.acucares = new DadoNutricional();
        this.fibraAlimentar = new DadoNutricional();
        this.proteinas = new DadoNutricional();
        this.sal = new DadoNutricional();
        this.potassio = new DadoNutricional();
        this.calcio = new DadoNutricional();
        this.ferro = new DadoNutricional();
        this.frutasVegetaisNozesEColzaNogueiraEAzeite = new DadoNutricional();
    }

    static mapearPropriedade(entrada) {
        const mapeamento = {
            'labels': 'labels',
            'Energia': 'energia',
            'Gorduras/lípidos': 'gordurasLipidos',
            'Gorduras/lípidos/ácidos gordos saturados': 'gordurasLipidosAcidosGordosSaturados',
            'Carboidratos': 'carboidratos',
            'Açúcares': 'acucares',
            'Fibra alimentar': 'fibraAlimentar',
            'Proteínas': 'proteinas',
            'Sal': 'sal',
            'Potássio': 'potassio',
            'Cálcio': 'calcio',
            'Ferro': 'ferro',
            'Frutas ‚ vegetais ‚ nozes e colza ‚ nogueira e azeite (estimativa da análise da lista de ingredientes)': 'frutasVegetaisNozesEColzaNogueiraEAzeite'
        };
        return mapeamento[entrada] || null;
    }

    setDadoNutricional(nome, comoVendido, porPorcao, comparadoA) {
        let atributo = DadosNutricionais.mapearPropriedade(nome);
        if (this.hasOwnProperty(atributo)) {
            this[atributo].comoVendido = comoVendido.replace(/<br>/g, ' ').replace(/\s+/g, ' ').trim();
            this[atributo].porPorcao = porPorcao.replace(/<br>/g, ' ').replace(/\s+/g, ' ').trim();
            this[atributo].comparadoA = comparadoA.replace(/\s+/g, ' ').trim();
        } else {
            console.error(`Atributo "${atributo}" não existe na classe.`);
        }
    }
}