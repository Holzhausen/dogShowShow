import React, {useState, useEffect} from 'react';
import {fetchRacas,fetchImagem} from './data';
import ClipLoader from 'react-spinners/ClipLoader';
import {container_img_style,img_style,input_style,label_style} from './styles';

const MainContainer = props => {
    
    const [nome_cachorro, setNome_cachorro] = useState(localStorage.getItem('nome_cachorro') || '');
    const [raca, setRaca] = useState(localStorage.getItem('raca') || '');
    const [cor,setCor] = useState(localStorage.getItem('cor') || '#555fff');
    const [fonte, setFonte] = useState(localStorage.getItem('fonte') || '');
    const [data,setData] = useState(localStorage.getItem('data') || '');
    const [url_animal,setUrl_animal] = useState(localStorage.getItem('url_animal') || '');

    const [loading,setLoading] = useState(false);

    const [racas,setRacas] = useState([]);

    const handleSave = ()=>{
      localStorage.setItem('nome_cachorro', nome_cachorro);
      localStorage.setItem('raca', raca);
      localStorage.setItem('cor', cor);
      localStorage.setItem('fonte', fonte);

      let today =  new Date();
      today = today.getDate()+ '-' +today.getMonth()+ '-' +today.getFullYear();
      setData(today);

      localStorage.setItem('data', today);

      alert('Dados salvos com sucesso');
    }

    const formatRaca = (raca)=>{
      let text = raca;
      if(raca.includes('/')){
        text = text .split('/');
        text = text[1] + ' '+ text[0] 
      }
      return text;
    }

    const doFetchRacas = async () =>{
      const result=await fetchRacas();
      setRacas(result);
  }

  const fetchImagemAnimal = async () =>{
    setLoading(true);
    const url = await fetchImagem(raca);
    console.log(url);
    setUrl_animal(url);
    
  }

    useEffect(() => {
        
      doFetchRacas();

    }, []);

    useEffect(()=>{
      if(raca!=''){
        fetchImagemAnimal();
      }else{
        setLoading(false);
      }
      
    },[raca]);

  return (
    <div>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <label style={label_style}>Nome do cachorro 
        <input style={input_style} type='text' value={nome_cachorro} onChange={(e)=>{
          fetchImagem();
          setNome_cachorro(e.target.value)}} />
        </label>
        <label style={label_style}>
          Raça <select style={input_style} value={raca} onChange={(e)=>{setRaca(e.target.value)}}>
              <option key='0' value=''>Selecione</option>
              {racas.map(raca=>{
                let text = formatRaca(raca);
              return  <option key={raca} value={raca}>{text}</option>
              })}
            </select>
          </label>

          <label style={label_style}>Cor 
          <input style={input_style} type='color' value={cor} onChange={(e)=>{setCor(e.target.value)}}
            />
          
          </label>
          <label style={label_style}>
          Fonte
            <select style={input_style} value={fonte} onChange={(e)=>{setFonte(e.target.value)}}>
              <option value='Eczar'>Eczar</option>
              <option value='Heebo'>Heebo</option>
              <option value='Lobster'>Lobster</option>
              <option value='IBM_Plex_Sans'>IBM Plex Sans</option>
              <option value='Supermercado_One'>Supermercado One</option>
            </select>
          </label>
          
        </div>

        <div style={{textAlign:"center"}}>
          <label style={{fontFamily:fonte, color:cor}}>{nome_cachorro && 'Nome do cachorro: '+ nome_cachorro} 
          {raca && ' Raça: '+ formatRaca(raca)}</label>
          
          <div style={container_img_style}>
          <ClipLoader loading={loading} style={{display: !loading ? 'none' : 'block'}}/>
          <img style={img_style(loading)} onLoad={()=>{
              setLoading(false);
            }} src={url_animal}/>
          </div>
          
          <button style={{width:'100px'}} onClick={()=>{handleSave()}}>Salvar</button>
        </div>

        
    </div>
    
    
  );
};

export default MainContainer;

