import { headers } from 'next/headers';
import StatusLabel, { Status } from './components/status-label';
import MagicButton from './components/magic-button';

export default function Home() {
  console.log(headers());
  return (
    <main>
      <h1 className="text-xl">Home Page</h1>
      <MagicButton />
    </main>
  );
}
