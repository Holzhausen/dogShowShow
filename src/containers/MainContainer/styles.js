
const container_img_style ={
    width:'100%', height:'400px', flex: 1, justifyContent:'center', alignItems:'center', padding:'10px'
}

const img_style= (loading)=>{
    return {height:'100%', marginLeft:'auto',marginRight:'auto', display: loading ? 'none' : 'block'} 
}

const input_style = {
    height: '20px',
  flex: '0 0 200px',
  marginLeft:' 10px'
}

const label_style = {
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    textAlign: 'right',
    width: '400px',
    lineHeight: '26px',
    marginBottom: '10px'
}

export {container_img_style,img_style,input_style,label_style}