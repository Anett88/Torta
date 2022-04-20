class Task{
    constructor(node, adat){
        this.node=node;
        this.adat=adat;
        this.taskTitle=this.node.children(".cim");
        this.taskDescription=this.node.children(".leiras");
        this.taskEndDate=this.node.children(".tartalom").children(".vegdatum");
        this.taskUser=this.node.children(".tartalom").children(".felhasznalonev");
        this.taskStatus=this.node.children(".tartalom").children(".statusz");
        this.modositGomb=this.node.children(".modosit");
        this.torolGomb=this.node.children(".torles");
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
        this.taskTitle.text(adat.title);
        this.taskDescription.text(adat.description);
        this.taskEndDate.text(adat.end_date);
        this.taskUser.text(adat.user.name);
        this.taskStatus.text(adat.status);
    }

    kattintasTrigger(gomb) {
        let esemeny = new CustomEvent(gomb, {
            detail: this.adat
        });
        window.dispatchEvent(esemeny);
    }
}