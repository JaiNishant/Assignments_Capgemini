class Account{
    constructor(id,name,balance){
        this.id=id;
        this.name=name;
        this.balance=balance;
    }
}

class SavingAccount extends Account{
    constructor(id,name,balance,interest){
        super(id,name,balance);
        this.interest=interest;
    }
    getBalance(){
        this.totalBalance=0;
        this.totalBalance=this.balance+(this.balance*this.interest);
        return this.totalBalance;
    }
}
class CurrentAccount extends Account{
    constructor(id,name,balance,cash_Credit){
        super(id,name,balance);
        this.cash_Credit=cash_Credit;
    }
    getBalance(){
        this.totalBalance=0;
        this.totalBalance=this.balance-this.cash_Credit;
        return this.totalBalance;
    }
}

SavingAccountobj = new SavingAccount(1,"Jai",1500,15);
console.log(SavingAccountobj.getBalance());

CurrentAccountobj = new CurrentAccount(2,"Nishant",10000,1000);
console.log(CurrentAccountobj.getBalance());