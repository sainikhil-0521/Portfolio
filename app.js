const sections=$(".section");
const secbtns=$(".controlls");
const secbtn=$(".control");
const allsections=$(".main-content");


function pageTransitions() {
   // Button click active class
    for(let i=0;i<secbtn.length;i++){
            $(secbtn[i]).on('click',  function (e) {
                console.log(secbtn[i]);
                let currentbtn=$(".active-btn");
                
                currentbtn.removeClass("active-btn");
                $(secbtn[i]).addClass("active-btn");
        
            });        
    }


    //sections active
    $(allsections[0]).on('click',function (e) {
        const id=e.target.dataset.id;
        if(id){

            ($.makeArray(secbtns)).forEach(function (btn){
                btn.classList.remove('active');
            });
            e.target.classList.add('active');
            $('#home').removeClass('active');
            ($.makeArray(sections)).forEach(function (sec){
                sec.classList.remove('active');
            });
            const element=$('#'+id);
            element[0].classList.add('active');

        }
        
    });
    
}
pageTransitions();
