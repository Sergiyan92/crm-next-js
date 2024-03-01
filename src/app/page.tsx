import { headers } from 'next/headers';
import StatusLabel, { Status } from './components/status-label';

export default function Home() {
  console.log(headers());
  return (
    <main>
      <h1 className="text-xl">Home Page {new Date().toTimeString()}</h1>
    </main>
  );
}
