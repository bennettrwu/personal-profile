import {Link, LinkProps} from 'react-router-dom';

export default function ScrollLink(props: LinkProps) {
  return <Link {...props} onClick={() => window.scrollTo(0, 0)} />;
}
