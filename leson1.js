var student =  {
    name: 'Phan Xuan Vuong',
    getName: function(){
        console.log(this.name);
        return this.name;
    }
};
var _deStudent =student.getName();