// import MainLayout from '@/components/layouts/MainLayout';
import Collections1 from '@/components/Collections/Collections1/Collections1';
import Collections2 from '@/components/Collections/Collections2/Collections2';
import Collections3 from '@/components/Collections/Collections3/Collections3';
import Collections4 from '@/components/Collections/Collections4/Collections4';
import ShowLayout from '@/components/layouts/ShowLayout';

export default function Collections() {
  return (
    <ShowLayout>
      <h1>Collections</h1>
      <Collections1 />
      <Collections2 />
      <Collections3 />
      <Collections4 />
    </ShowLayout>
  );
}
