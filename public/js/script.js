$(function() {
    const token=$('meta[name="csrf-token"]').attr('content');
    const ajax=new Ajax(token);
    let allTaskapiVegpont="http://localhost:8000/api/tasks";
    let taskapiVegpont="http://localhost:8000/api/task";
    let userapivegpont="http://localhost:8000/api/users";
    let tasksanduserapi="http://localhost:8000/api/tasks/expand=user";
    let datumszerintNovekvo="/sort?_sort=end_date&_order=asc";
    let datumszerintCsokken="/sort?_sort=end_date&_order=desc";   
    let nevKereses="/search?title_like=";
    let leirasKereses="/search?description_like=";     
    const taskTomb=[];
    const userTomb=[];
    ajax.getAjax(tasksanduserapi, taskTomb, taskLista);
    ajax.getAjax(userapivegpont, userTomb, userLista);

    function taskLista(taskok) {
        const szuloElem = $(".tasks");
        const sablonElem = $("aside .task");
        szuloElem.empty();
        sablonElem.show();
        taskok.forEach(function(elem) {
            let node = sablonElem.clone().appendTo(szuloElem);
            const obj = new Task(node, elem);

        });
        sablonElem.hide();

        $(window).on("torol",(event)=>{            
            ajax.deleteAjax(taskapiVegpont, event.detail.id);
            location.reload();
        });

        $(window).on("modosit",(event)=>{
            id=event.detail.id;
            $("#nev").val(event.detail.title);
            $("#leiras").val(event.detail.description);
            $("#befdate").val(event.detail.end_date);
            $("#felh").val(event.detail.userId);
            $("#status").val(event.detail.status);
            $("#submit").prop("disabled",true);
            $("#form").show();
        });


        //console.log($('meta[name="csrf-token"]').attr('content'));
    }

    function userLista(userek){
        let option="";
        userek.forEach(function(elem){
            option="<option value='"+elem.id+"'>"+elem.name+"</option>";
            $("#felh").append(option);
        });
    }

    $("#form").hide();
    $(".ujtask").on("click",()=>{
        $("#form").show();
        $("#msubmit").prop("disabled",true);
    });


    $("#submit").on("click",()=>{
        let title=$("#nev").val();
        let leiras=$("#leiras").val();
        let befdatum=$("#befdate").val();
        let userid=$("#felh").val();
        let statusz=$("#status").val();
        let ujAdat={
            "title":title,
            "description":leiras,
            "end_date":befdatum,
            "userId":userid,
            "status":statusz
        };
        ajax.postAjax(taskapiVegpont, ujAdat);
        //location.reload();
    });

    $("#msubmit").on("click",()=>{
        let title=$("#nev").val();
        let leiras=$("#leiras").val();
        let befdatum=$("#befdate").val();
        let userid=$("#felh").val();
        let statusz=$("#status").val();
        let ujAdat={
            "title":title,
            "description":leiras,
            "end_date":befdatum,
            "userId":userid,
            "status":statusz
        };
        ajax.putAjax(taskapiVegpont, id, ujAdat);
        location.reload();
    });

    $("#nkereses").on("keyup",function(){
            let ertek=$(this).val();
            ajax.getAjax(taskapiVegpont+nevKereses+ertek,taskTomb, taskLista);
    });
    
    $("#lkereses").on("keyup",function(){
        let ertek=$(this).val();
        ajax.getAjax(taskapiVegpont+leirasKereses+ertek,taskTomb, taskLista);
    });

    $("#rendezes").on("change",function(){
        let apivp="";
        let kivalasztottszures=$(this, " option:selected").val();
        switch (kivalasztottszures) {
            case "csokkeno":
                apivp=taskapiVegpont+datumszerintCsokken;
                break;
        
            case "novekvo":
                apivp=taskapiVegpont+datumszerintNovekvo;
                break;
        }
        ajax.getAjax(apivp,taskTomb, taskLista);
    });
});