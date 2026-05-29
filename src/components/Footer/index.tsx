const Footer = () => {
  return (
    <footer className="w-full h-16 flex items-center justify-center bg-zinc-50 dark:bg-zinc-900">
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        © {new Date().getFullYear()} BinaryInc. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
