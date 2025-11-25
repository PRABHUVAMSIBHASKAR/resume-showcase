const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-muted-foreground mb-2">
          © {new Date().getFullYear()} Baki Prem Pavan Reddy. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground/70">
          Built with passion using React, TypeScript, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
