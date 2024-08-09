import './horizontal-center-content.scss';

export default function HorizontalCenterContent({ children }: React.PropsWithChildren) {
  return (
    <div className='horizontal-center-container'>
      <div className='horizontal-center-content-container'>{children}</div>
    </div>
  );
}
