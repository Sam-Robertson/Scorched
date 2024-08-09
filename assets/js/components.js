class CustomNav extends HTMLElement {
    connectedCallback() {
        fetch('/components/navbar.html')
            .then(response => response.text())
            .then(data => {
                this.innerHTML = data;
            })
            .catch(error => console.error('Error loading navbar:', error));
    }
}

customElements.define('my-nav', CustomNav);

class CustomContact extends HTMLElement {
    connectedCallback() {
        fetch('/components/contactUs.html')
            .then(response => response.text())
            .then(data => {
                this.innerHTML = data;
            })
            .catch(error => console.error('Error loading navbar:', error));
    }
}

customElements.define('my-contact', CustomContact);
