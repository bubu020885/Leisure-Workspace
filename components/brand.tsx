export function Brand({ small = false }: { small?: boolean }) {
  return <span className={`brand brand-new ${small ? "brand-small" : ""}`}>
    <img className="brand-logo" src="/logo-mark.svg" alt="" aria-hidden="true" />
    <span className="brand-copy"><span>Leisure<span className="brand-light">Workspace</span></span><small>Presented by Amusement Business Support</small></span>
  </span>;
}
