export default function Header() {
  return (
    <header className="p-4 border-t border-r border-l border-t-size border-yellow-100 rounded-xl text-yellow-100 text-4xl silver-glow">
      <h1>Web 3 Demo</h1>
      <p className="text-base m-2">
        Incorporating React.js, Next.js, Web3.js, Three.js, MetaMask integration
      </p>
      <p className="text-base m-2 text-red-400">
        WARNING: Non of these items are actually for sale. Payments are taken on
        the Sepolia Test Net
      </p>
    </header>
  );
}
