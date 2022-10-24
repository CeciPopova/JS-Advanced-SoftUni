class EmployeeCard {
    #parent = null;
    #el = null;

    constructor(parentSelector, firstName, lastName, ocupation) {
        //TODO:validate input data
        this.firstName = firstName;
        this.lastName = lastName;
        this.ocupation = ocupation;

        this.#el = document.createElement('div');
        this.#parent = document.querySelector(parentSelector);

        this.#parent.appendChild(this.#el);

        this.#init();
        this.render();
    }
    #init(){
        this.#el.addEventListener('click', (e) => {
           // e.currentTarget.style.border = '2px solid green';
            e.currentTarget.style.transform = 'scale(1.2)'
        });

    }

    getContent() {
        return `
           <div class = "card">
                <img src = "img_avatar (1).png" alt = "Avatar" style = "width:100%">
                <div class = "container">
                   <h4><b>${this.firstName} ${this.lastName}</b></h4>
                   <p>${this.ocupation}</p>
                </div>
            </div>       
        `;

    }
    render() {
        //Warning XSS attack
        this.#el.innerHTML = this.getContent();
    }
}