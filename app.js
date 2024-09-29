/* Variables  */
const btn_agregar= document.getElementById('boton-enter');
let input_tarea = document.getElementById('input');
const lista_pendientes = document.getElementById('lista-pendientes');
let tarea;
let elemento;
let id=0;

/* Funciones */
btn_agregar.addEventListener('click',function(){
    tarea= input_tarea.value;
    elemento = `<li class="item-lista" id="${id}">
                        <i class="far fa-circle co " data="realizado" id="${id}" estado="false"></i>
                        <p class="text" data="texto_tarea" id="${id}">${tarea}</p>
                        <i class="fas fa-trash de" data="eliminado" id="${id}"></i> 
                </li>
                `  
    id++;            
    lista_pendientes.insertAdjacentHTML('beforeend',elemento);

    input_tarea.value = "";
})


lista_pendientes.addEventListener('click',function(event){
    const element = event.target; 
    
    /* Marcar tarea */

    if(element.getAttribute('data') == "realizado"){
        let padre = element.parentNode;

        if(element.getAttribute('estado') == "false"){
            if(element.getAttribute('id') == element.parentNode.getAttribute('id') ){
                padre.children[0].setAttribute('class','fa-solid fa-circle-check') 
                padre.children[1].style.textDecoration = 'line-through'; 
                element.setAttribute('estado','true'); 
            }
        }

        else{
            padre.children[0].setAttribute('class','far fa-circle co') 
            padre.children[1].style.textDecoration = 'none'; 
            element.setAttribute('estado','false'); 
        }

        
    }


    /* Eliminar tarea */

    if(element.getAttribute('data') == "eliminado"){
        let padre = element.parentNode;
        if(padre.children[0].getAttribute('estado') == 'true'){
            if(element.getAttribute('id') == element.parentNode.getAttribute('id') ){ 
                lista_pendientes.removeChild(padre);           
            }
        }
        else{
            alert("primero marque la tarea a eliminar")
        }
    }

   
})
