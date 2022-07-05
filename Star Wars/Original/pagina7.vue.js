const Pagina7 = { 
    data(){
      return {
        personagens:[],
        personagem:null,
        personagemEscolhido:null,
        index:null,
        flipper: false,
        naves:null,
        navesEscolhidas: {},
        navesEscolhidas2: {},
        navesEscolhidas3: {},
        navesEscolhidas4: {},
        navesEscolhidas5: {},
        navesEscolhidas6: {},
        navesEscolhidas7: {},
      }
    },
  
    watch:{
      personagemEscolhido(oldValue,newValue){
        this.navesEscolhidas=null;
        this.navesEscolhidas2=null;
        this.navesEscolhidas3=null;
        this.navesEscolhidas4=null;
        this.navesEscolhidas5=null;
        this.navesEscolhidas6=null;
        this.navesEscolhidas7=null;
      }
    },
  
    //Gancho para a requisição dos personagens.
    created() {
      this.getPersonagens(); 
    },
  
  
  
  
    methods:{
      getNaves(index){
        this.personagemEscolhido = this.personagens[index];
        this.naves = this.personagemEscolhido.starships;
  
        fetch(`${this.naves[0]}?format=json`).then(response=>response.json()).then((data)=>{
          this.navesEscolhidas=data.name;
        });
        fetch(`${this.naves[1]}?format=json`).then(response=>response.json()).then((data)=>{
          this.navesEscolhidas2=data.name;
        });
        fetch(`${this.naves[2]}?format=json`).then(response=>response.json()).then((data)=>{
          this.navesEscolhidas3=data.name;
        });
        fetch(`${this.naves[3]}?format=json`).then(response=>response.json()).then((data)=>{
          this.navesEscolhidas4=data.name;
        });
        fetch(`${this.naves[4]}?format=json`).then(response=>response.json()).then((data)=>{
          this.navesEscolhidas5=data.name;
        });
        fetch(`${this.naves[5]}?format=json`).then(response=>response.json()).then((data)=>{
          this.navesEscolhidas6=data.name;
        });
        fetch(`${this.naves[6]}?format=json`).then(response=>response.json()).then((data)=>{
          this.navesEscolhidas7=data.name;
        });
  
  
          },
     
  
  
      getPersonagens(){
        axios
          .get("https://swapi.dev/api/people/?page=7&format=json")
          .then((res) => {
             this.personagens = res.data.results;
           })
           .catch((error) => {
             console.log(error);
           });
        },
      },
  
    
    
  
      //Template do componente
      template: `
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 header">
          <a href="index.html" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <img src="img/star wars5.jpg" height="40" alt="" class="container__img">
          </a>
          <ul class="nav nav-pills header2">
            <li class="nav-item"><router-link to="/" class="nav-link active" aria-current="page" style="background: red; border-color: red;">Home</router-link></li>
            <li class="nav-item"><router-link to="/pagina8" class="nav-link" style="color: red;">Próxima</router-link></li>
            <li class="nav-item"><router-link to="/pagina6" class="nav-link" style="color: red;">Anterior</router-link></li>           

          </ul>
        </header>
          <h1 class="pagina">Página 7</h1>
  
      <div class="container">
      <div class="content">
      
      <section class="conhecimento">
  
      <div class="conhecimento__container" >
        <div class="conhecimento__flip-container" v-for = "(personagem, index) in personagens" :index="index" @mouseover="getNaves(index)">
          <div class='conhecimento__flipper'>
            <div class="conhecimento__front">
           
              <div><img src="img/star wars2.jpg" alt="" style="height: 60px;"><div><p>{{personagem.name}}</p></div></div>
            </div>
            <div class="conhecimento__back">
              <div>
              <p style="font-size:20px; font-weight: bold;">{{personagem.name}} (naves)</p>
              <p style="font-size:12px;">{{navesEscolhidas}}</p>
              <p style="font-size:12px;">{{navesEscolhidas2}}</p>
              <p style="font-size:12px;">{{navesEscolhidas3}}</p>
              <p style="font-size:12px;">{{navesEscolhidas4}}</p>
              <p style="font-size:12px;">{{navesEscolhidas5}}</p>
              <p style="font-size:12px;">{{navesEscolhidas6}}</p>
              <p style="font-size:12px;">{{navesEscolhidas7}}</p>
              
              </div>
            </div>
          </div>
        </div>
      </div>
  
  </section>
      </div>
      <div class="flap"></div>
    </div>
     `,
          }
            
  
      
       