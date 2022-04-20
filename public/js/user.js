class User{
    constructor(node, adat){
        this.node=node;
        this.adat=adat;
        this.userId=this.node.children(".id");
        this.userName=this.node.children(".name");
        this.modositGomb=this.node.children("td").children(".modosit");
        this.torolGomb=this.node.children("td").children(".torles");

        this.modositGomb.on("click",()=>{
            this.kattintasTrigger("modosit");
        });
        this.torolGomb.on("click",()=>{
            this.kattintasTrigger("torol");
        });
        this.setAdat(this.adat);
    }

    setAdat(adat){
        this.adat=adat;
        this.userId.text(this.adat.id);
        this.userName.text(this.adat.name);
    }

    kattintasTrigger(gomb) {
        let esemeny = new CustomEvent(gomb, {
            detail: this.adat
        });
        window.dispatchEvent(esemeny);
    }
}