const Home = { 
//Componente Home e declaração das variáveis de dados e validações dos formulários
    data(){
       return {
        
        }
    },
    
    methods:{
         
      proximo(){
        this.$emit('proximo',"/pagina1")
      },

      
    },
    
    //Template de home (Primeira página)
    template: `
    <div class="text-center">
    
    <section class="form-signin w-100 m-auto " >
      <form style="height: 450px; width: 310px; margin: 90px auto;">
      <div style="display: flex; flex-direction: column ;justify-content: center">
        <img class="mb-4" src="img/star wars2.jpg" alt=""  height="100" style="text-align: center;">
  
        <img src="img/spaceship-2841277_640.png" alt=""  >
      </div>
        <button class="w-100 btn btn-lg btn-dark" @click="proximo" type="button">Clique aqui</button>
        <p class="mt-5 mb-3 text-muted">&copy; 2022</p>
      </form>
    </section>
    </div>
    </div>` 
    }
      

 