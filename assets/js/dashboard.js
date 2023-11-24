document.addEventListener('DOMContentLoaded', function() {
    loadMainNavbar();
    loadNav();
});

window.addEventListener('load', function() {

});


const loadMainNavbar = async () => {
    
    const navbar = document.querySelector("navbar");

    try {
        const response = await fetch('../../assets/segments/main_navbar.html');
        const html = await response.text();
        navbar.innerHTML = html;

        return true
        
    } catch (error) {

        console.log('error ao carregar pagina')
        
    }

}

const loadNav = async () => {
    
    const navbar = document.querySelector("nav");

    try {
        const response = await fetch('../../assets/segments/navigation.html');
        const html = await response.text();
        navbar.innerHTML = html;

        return true
        
    } catch (error) {

        console.log('error ao carregar pagina')
        
    }

}

const loadContent = async (data) => {
    const content = document.querySelector("main");

    try {

        const response = await fetch(`../../assets/segments/${data}.html`);
        const html = await response.text();
        content.innerHTML = html;

        return true
        
    } catch (error) {

        console.log('error ao carregar pagina')
        
    }
}

const grid = (data) => {
    const container = document.getElementById('container');
    const dataSet = data;
    let row;
  
    for (let index = 0; index < dataSet.length; index++) {
      const element = dataSet[index];
      const status = element['status'] ? '<span class="badge bg-primary">Actived</span>' : '<span class="badge bg-danger">Desactived</span>';
  
      if (index % 6 === 0) {
        row = document.createElement('div');
        row.classList.add('row');
      }
  
      row.innerHTML += `<div class="col-xl-2 col-lg-6">${card(
        element['_id'],
        element['name'],
        element['description'],
        status
      )}</div>`;
  
      if ((index + 1) % 6 === 0 || index === dataSet.length - 1) {
        container.appendChild(row);
      }
    }
  };

const card = (_id, name, description, status) => {

    const template = `                
    <div class="card card-body">
        <div class="d-flex">

            <div class="flex-fill">
                <h6 class="mb-0">${name}</h6>
                ${status}
            </div>

            <div class="align-self-center ms-3">
                <div class="dropdown">
                    <a href="#" class="text-body" data-bs-toggle="dropdown">
                        <i class="ph-list"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end">
                        <a onclick="itemEdit(${_id});" class="dropdown-item">
                            <i class="ph-chats me-2"></i>
                            Edit
                        </a>
                        <a onclick="itemDelete(${_id});" class="dropdown-item">
                            <i class="ph-phone me-2"></i>
                            Delete
                        </a>
                        <a href="#" class="dropdown-item">
                            <i class="ph-envelope me-2"></i>
                            Disable
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    
    console.log(template)
    return template;

}

const itemCreate = () => {}
const itemUpdate = () => {}
const itemDelete = () => {}
