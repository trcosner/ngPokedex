(function(){
  'use strict';

  angular
    .module('Pokedex', [])
    .controller('MainController', Controller);

    function Controller(){
      var vm = this;

      vm.types = [
        {id: 0, name: 'Grass'},
        {id: 1, name: 'Fire'},
        {id: 2, name: 'Water'},
        {id: 3, name: 'Lightning'}
      ]

      vm.pokedex = [
        {id: parseInt('001'), name:'Bulbasaur', type: 'Grass'},
        {id: parseInt('002'), name:'IvySaur', type: 'Grass'},
        {id: parseInt('003'), name:'Venusaur', type: 'Grass'},
        {id: parseInt('004'), name:'Charmander', type: 'Fire'},
        {id: parseInt('005'), name:'Charmeleon', type: 'Fire'},
        {id: parseInt('006'), name:'Charizard', type: 'Fire'},
        {id: parseInt('007'), name:'Squirlty', type: 'Water'},
        {id: parseInt('008'), name:'Wartortle', type: 'Water'},
        {id: parseInt('009'), name:'Blastoise', type: 'Water'},
        {id: parseInt('025'), name: 'Pikachu', type: 'Lightning'}
      ]

      vm.hello = "World"
    }
})();
