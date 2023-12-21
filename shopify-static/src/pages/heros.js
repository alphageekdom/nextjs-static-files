import ShowLayout from '@/components/layouts/ShowLayout';
import Hero1 from '@/components/hero/Hero1/Hero1';
import Hero2 from '@/components/hero/Hero2/Hero2';

export default function Heros() {
  return (
    <ShowLayout>
      <h1>All Heros</h1>
      <div className='comp-space'>
        <Hero1 />
      </div>
      <div className='comp-space'>
        <Hero2 />
      </div>
    </ShowLayout>
  );
}
