//Constante do componente principal
const app = {

  
    //Template do componente principal.
    
    template:  
      `<!--Aqui está as transmissões do $emit-->
      <router-view @proximo="proximo"></router-view>

      `,
  
    //Gancho para formatar o celular e o cpf

    //recebimento dos dados dos componentes filhos
    data(){
      return{

      }
    },

  
  
    //recebimento dos dados e uso do router pelos botões nos templates.
    methods:{
     proximo(path){
      this.$router.push(path);
      
     },

     created:{
       
     }
  

          },   
  }