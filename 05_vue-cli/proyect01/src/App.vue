<template>

<div id="app">
  <h2>{{titulo}}</h2>

  <saludar></saludar>

  <enviar></enviar>
  <enviar></enviar>

 <div class="container">
      <div class="form">
        <div class="form-group">
          <label for="">Nombre: </label>
          <input type="text" class="form-control" v-model="registro.nombre">
        </div>
        <div class="form-group">
          <label for="">Colegio: </label>
          <input type="text" class="form-control" v-model="registro.colegio">
        </div>
        <br>
        <button class="btn btn-primary" @click="agregarEstudiante">Save</button>
      </div>
      <br>
      <div class="row">
        <div class="col-5" v-for="(item) in registros" :key="item.id">
          <div class="card">
            <div class="form-group">
              <h2>{{item.nombre}}</h2>
              <hr>
              <p>{{item.colegio}}</p>
            </div>
          </div>

        </div>
         
      </div>
    </div>
</div> 
</template>

<script>

import saludar from './components/saludar.vue'
export default {
  name: 'app',
  components:{
    saludar,
    
  },
  data () {
    return {
      titulo: 'Bienvenido a mi primer APP con VUE',
      registro:{
        nombre: '',
        colegio: ''
      },
      registros:[
       
      ]
    }
  },
  methods:{
    agregarEstudiante: function(){
      const {nombre, colegio} = this.registro;
      this.registros.push({
        nombre,
        colegio
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
