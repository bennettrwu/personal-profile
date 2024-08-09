import './frosted-card.scss';

export default function FrostedCard({ children }: React.PropsWithChildren) {
  return <div className='frosted-card'>{children}</div>;
}
