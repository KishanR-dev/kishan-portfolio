import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
      <h2 className="text-3xl font-mono text-amber-core mb-4">404 // NOT FOUND</h2>
      <p className="text-text-secondary mb-8 font-sans max-w-md">
        The requested resource was not found. This node does not exist in the architecture.
      </p>
      <Link 
        href="/"
        className="px-6 py-2 border border-panel-border hover:border-amber-core hover:text-amber-core transition-colors font-mono uppercase tracking-widest text-sm"
      >
        Return to Root
      </Link>
    </div>
  );
}
