import './half-split.scss';

export default function HalfSplit({ children }: React.PropsWithChildren) {
  return <div className='half-split-container'>{children}</div>;
}
