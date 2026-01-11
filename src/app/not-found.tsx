import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      <section
        className='container'
        style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}
      >
        <h1 style={{ fontSize: '50px' }}>Not Found</h1>
        <p>Could not find requested resource</p>
        <Link href='/'>Return Home</Link>
      </section>
    </main>
  );
}
