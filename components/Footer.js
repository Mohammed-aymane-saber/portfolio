export default function Footer() {
  return (
    <footer className={`py-4 mt-5 ${typeof window !== 'undefined' && document.body.getAttribute('data-theme') === 'dark' ? 'bg-dark text-light' : 'bg-light'}`}>
      <div className="container text-center">
        <small>&copy; {new Date().getFullYear()} Mohammed Aymane Saber. All rights reserved.</small>
      </div>
    </footer>
  );
}
