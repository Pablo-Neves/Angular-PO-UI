function showContent(conteudo) {
    switch(conteudo) {
        case 'home':
            
            document.getElementById('home').className = ''
            document.getElementById('clientes').className = 'hidden'
            document.getElementById('orcamentos').className = 'hidden'

            document.getElementById('lihom').className = ''
            document.getElementById('licli').className = 'hidden-mob'
            document.getElementById('liorc').className = 'hidden-mob'        

            break

        case 'clientes':

            document.getElementById('home').className = 'hidden'
            document.getElementById('clientes').className = ''
            document.getElementById('orcamentos').className = 'hidden'
            
            document.getElementById('lihom').className = 'hidden-mob'
            document.getElementById('licli').className = ''
            document.getElementById('liorc').className = 'hidden-mob'     

            break

        case 'orcamentos':

            document.getElementById('home').className = 'hidden'
            document.getElementById('clientes').className = 'hidden'
            document.getElementById('orcamentos').className = ''  
            
            document.getElementById('lihom').className = 'hidden-mob'
            document.getElementById('licli').className = 'hidden-mob'
            document.getElementById('liorc').className = ''  

            break

    }
}

const showMenu = () => {

    let url = document.URL
    let home = document.getElementById('lihom')
    let cliente = document.getElementById('licli')
    let orcamentos = document.getElementById('liorc')

    if(url.endsWith('#clientes')){
        home.className === 'hidden-mob' ? home.className = '' : home.className
        cliente.className = ''
        orcamentos.className === 'hidden-mob' ? orcamentos.className = '' : orcamentos.className = 'hidden-mob'
    }else if(url.endsWith('#orcamentos')){
        home.className === 'hidden-mob' ? home.className = '' : home.className
        cliente.className === 'hidden-mob' ? cliente.className = '' : cliente.className = 'hidden-mob'
        orcamentos.className = ''
    }else{
        home.className = ''
        cliente.className === 'hidden-mob' ? cliente.className = '' : cliente.className = 'hidden-mob'
        orcamentos.className === 'hidden-mob' ? orcamentos.className = '' : orcamentos.className = 'hidden-mob'
    }
}