const Header = () => {
    const view = `
    <nav class="navbar fixed-top navbar-light bg-warning">
        <a class="navbar-brand" href="${location}/">Scraper meli</a>
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="${location}/">Home <span class="sr-only">(current)</span></a>
            </li>
        </ul>
    </nav>
    `;
    return view
}

export default Header; 