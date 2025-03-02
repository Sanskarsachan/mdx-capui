import Header from '@/components/website/header';
import HeroSec from '@/components/website/hero-sec';

export default function Home() {
  return (
    <>
      <Header />
      <main className='relative'>
        <HeroSec />
      </main>
      {/* <footer className='border-t pb-24 pt-4 xl:pb-4 absolute bottom-0 w-full z-[2]'>
        <div className='container mx-auto'>
          <p className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
            Built by{' '}
            <a
              href='' // Add your threads Link here
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              naymur
            </a>{' '}
            . The source code is available on{' '}
            <a
              href='' // Add your GitHub Link here
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </footer> */}
    </>
  );
}
