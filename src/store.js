import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    scrollPos: 0,
    scrollSnapping: {
    	elements: [],
    	tolerance: 600
    },
    message: "hoi ik heet hans",
	portfolioItems:[
		{title: "designing portfolio items"},
		{title: "designing portfolio items 2"},
		{title: "designing portfolio items 3"},
		{title: "designing portfolio items 4"}
	]
  },
  mutations: {
    scrollPos (state) {
		if(window.pageYOffset!= undefined){
			state.scrollPos = pageYOffset;
		}
		else{
			var sy, d= document, r= d.documentElement, b= d.body;
			state.scrollPos = r.scrollTop || b.scrollTop || 0;
		}
    },
    setMessage (state, newMessage){
    	state.message = newMessage;
    },
    snappingElements (state, elements){
    	state.scrollSnapping.elements = elements;
    }
  }
})