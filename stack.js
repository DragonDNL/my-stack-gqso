function stack() {       

    this.items = [];  
          
    this.size = function() {     
     return this.items.length;   
    }
 
   this.isEmpty = function() {     
     return this.items.length === 0;   
   }
 
   this.push = function(element) {
     this.items.push(element);   
   }
 
   this.pop = function() {   
     if (this.isEmpty())
        throw "pilha vazia"  
     return this.items.pop();   
   }
 }
 
 module.exports = stack;