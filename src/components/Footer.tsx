import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}. Feito com React, TypeScript &amp; CSS.
        </p>
        <a href="#topo" className="footer-top">
          voltar ao topo ↑
        </a>
      </div>
    </footer>
  );
}
