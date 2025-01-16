const Footer = () => {
    const year = new Date().getFullYear();
    <footer>
        <p className=" font-bold  text-slate-500">© {year} - All rights reserved</p>
    </footer>
}

export default Footer