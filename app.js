



 class person {
   constructor( name, lastname, age ) {
     this.name = name,
     this.lastname = lastname,
     this.age = 0,
     this.ShowFullName = function(){
         return `${this.name} ${this.lastname} ${this.age}`
     }
   }
 }

 const user = new person('Jorge Antonio', 'Lujan Ubaldo', 24)

 console.log(user)
