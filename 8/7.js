var sandwich = {
    meat: '',
    cheese: '',
    bread: '',
    condiment: '',
    makeSandwich: function (meat,cheese, bread, condiment) {
        this.meat = meat;
        this.cheese = cheese;
        this.bread = bread;
        this.condiment = condiment;
        var mySandwich = this.bread +  ", " + this.meat + ", "
            + this.cheese + ", " + this.condiment;
        return mySandwich
    }
}