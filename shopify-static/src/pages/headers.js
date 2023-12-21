import Header2 from '@/components/Header/Header2/Header2';
import Header1 from '@/components/Header/Header1/Header1';
import Header3 from '@/components/Header/Header3/Header3';
import Header4 from '@/components/Header/Header4/Header4';
import ShowLayout from '@/components/layouts/ShowLayout';

export default function Home() {
  return (
    <ShowLayout>
      <h1>All Headers</h1>
      <div className='comp-space'>
        <Header1 />
      </div>
      <div className='comp-space'>
        <Header2 />
      </div>
      <div className='comp-space'>
        <Header3 />
      </div>
      <div className='comp-space'>
        <Header4 />
      </div>
    </ShowLayout>
  );
}
