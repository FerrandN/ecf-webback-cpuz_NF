// import du module FileSystem (permet de manipuler les fichiers locaux)
const fs = require('fs');

class CpuCollection
{
    constructor()
    {
        // Chargement du JSON (e frontend, on utilisait fetch pour charger un fichier distant)
        // ici, on charge un fichier local
        let rawdata = fs.readFileSync('cpuz.json');

        // Conversion du JSON en objet JS et stockage de l'objet dans this.data
        this.data = JSON.parse(rawdata);
    }

    /**
     * 
     * @param {Number} _id 
     * @returns {Object} found CPU or empty object if not found
     */
    findCpuById(_id)
    {
        let cpu = this.data.find(obj => obj.id == _id);

        // implémenter ici la recherche d'un CPU par son identifiant

        return cpu;
    }

    addCpu(_newCpu)
    {
        if(Number.isInteger(_newCpu.price) && typeof _newCpu.brand === 'string')
        {
            let highestNumber = 0;
            for(let data of this.data)
            {
                if(data.id > highestNumber)
                {
                    console.log(data.id);
                    highestNumber = data.id;
                }
            }
            highestNumber++;
            _newCpu.id = highestNumber;

            this.data.push(_newCpu);
        }
        // implémenter ici l'ajout d'un CPU dans la collection 'this.data' puis retourner le nouveau CPU ajouté
        // Pensez à générer un nouvel identifiant pour le nouveau CPU

        return _newCpu;
    }
}


module.exports = CpuCollection