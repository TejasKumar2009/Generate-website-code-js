function generate_code_link() {
    const link_container = document.getElementById("link_container");
    const code_link = "view-source:"+document.getElementById("linkInput").value;
    
    link_container.classList.remove("d-none")
    link_container.classList.add("d-block")

    navigator.clipboard.writeText(code_link);

    link_container.innerHTML = `<a>${code_link}     -------->   Link Copied to Clipboard !</a>`;

}
