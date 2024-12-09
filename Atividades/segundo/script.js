import { Material } from "./Material";


class Biblioteca{

    _material = List<Material>

    constructor(material){
        this.material = material
    }

    get getMaterial(){
        return this._material
    }

    set Material(materiais){
        this.materiais.push(materiais);
    }

    EditartMaterial(){

    }

    ExcluirMaterial(){
     
    }


}



