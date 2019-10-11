function larger  (x, y)  { 
  const a=x.length;
  const b=y.length;
  
  if(a>b)
  {
    return x
  }
  else if(b<a){
    return y
  }
}


const large = new Vue({
  el: '#largerstring',
  data: {
    firstString: 'raghu',
    secondString: 'jeevan',
    guest: 'Mohan'
    
  },
  computed: {
    string: function () {
      const i = this.firstString
      const j = this.secondString
      
      
      return `${this.guest},your Largets Word is ${larger(i, j)}.`
    }
  }
})