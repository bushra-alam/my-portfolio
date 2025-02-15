function showSidebar(){
    let sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "flex"
    document.documentElement.classList.add("no-scroll")
}

function hideSidebar(){
    let sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "none"
    document.documentElement.classList.remove("no-scroll")
}