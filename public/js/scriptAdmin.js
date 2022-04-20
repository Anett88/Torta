$(function() {
    const token=$('meta[name="csrf-token"]').attr('content');
    const userTomb=[];
    const ajax=new Ajax(token);
    let alluserapiVegpont="http://localhost:8000/api/users";
    let userapiVegpont="http://localhost:8000/api/user";
    ajax.getAjax(alluserapiVegpont, userTomb, userLista);

    function userLista(userek) {
        const szuloElem = $("article table tbody");
        const sablonElem = $("aside table tr");
        szuloElem.empty();
        userek.forEach(function(elem) {    
            let node = sablonElem.clone().appendTo(szuloElem);
            const obj = new User(node, elem);

        });
        sablonElem.hide();

        $(window).on("torol",(event)=>{          
            ajax.deleteAjax(userapiVegpont, event.detail.id);
        });

        // $(window).on("modosit",(event)=>{
        //     id=event.detail.id;
        //     $("#nev").val(event.detail.title);
        //     $("#leiras").val(event.detail.description);
        //     $("#befdate").val(event.detail.end_date);
        //     $("#felh").val(event.detail.userId);
        //     $("#status").val(event.detail.status);
        //     $("#submit").prop("disabled",true);
        //     $("#form").show();
        // });


        //console.log($('meta[name="csrf-token"]').attr('content'));
    }
});