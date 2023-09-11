const obj = {
    firstName:"Deepak",
    city:"Kolkata",
    func1:function(lastname){
        console.log(this.firstName+" "+lastname+" "+this.city)
    }
}
const obj1 = {
    firstName:"Vishal",
    city:"Patna"
}

obj.func1.call(obj1,"Kumar")