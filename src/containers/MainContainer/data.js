import api from "../../services/api";

const fetchRacas = async () => {
  let racas = [];

  await api.get("/breeds/list/all").then(result => {
    if ((result.status = 200)) {
      const r = result.data.message;

      for (const raca in r) {
        if (r[raca].length > 0) {
          for (const subraca in r[raca]) {
            racas.push( raca+ '/' +r[raca][subraca]  );
          }
        } else {
          racas.push(raca);
        }
      }
    } else {
      alert("Erro ao baixar as raças!");
    }
  }).catch(error=>{
      alert('Erro de conexão')
  });

  return racas;
};


const fetchImagem = async (raca) =>{
    let url='';
    await api.get('breed/'+ raca + '/images/random').then(result => {
        if ((result.status = 200)) {

            url = result.data.message;
            console.log(url);
        }else{
            alert('Não foi possível obter a url da imagem');
        }
    }).catch(error=>{
        
    });

    return url;
}

 export { fetchRacas ,fetchImagem};
