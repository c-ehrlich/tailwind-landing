import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import logo from '../public/img/logo.svg';
import illustrationIntro from '../public/img/illustration-intro.svg';
import avatarAnisha from '../public/img/avatar-anisha.png';
import avatarRichard from '../public/img/avatar-richard.png';
import avatarAli from '../public/img/avatar-ali.png';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Manage Landing Page</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* Navbar */}
      <nav className='relative container mx-auto p-6'>
        <div className='flex items-center justify-between'>
          <div className='pt-2'>
            <Image src={logo} alt='logo' layout='intrinsic' />
          </div>
          <div className='hidden space-x-6 md:flex'>
            <Link href='#'>
              <a className='hover:text-darkGrayishBlue'>Pricing</a>
            </Link>
            <Link href='#'>
              <a className='hover:text-darkGrayishBlue'>Produce</a>
            </Link>
            <Link href='#'>
              <a className='hover:text-darkGrayishBlue'>About Us</a>
            </Link>
            <Link href='#'>
              <a className='hover:text-darkGrayishBlue'>Careers</a>
            </Link>
            <Link href='#'>
              <a className='hover:text-darkGrayishBlue'>Community</a>
            </Link>
          </div>
          <a
            href='#'
            className='hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero section */}
      <section id='hero'>
        <div className='container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0'>
          {/* Left item */}
          <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
            <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
              Bring everyone together to build better products
            </h1>
            <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <div className='flex justify-center md:justify-start'>
              <a
                href='#'
                className='p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'
              >
                Get Started
              </a>
            </div>
          </div>
          {/* Image */}
          <div className='md:w-1/2'>
            <Image src={illustrationIntro} alt='a' />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id='features'>
        <div className='container flex flex-col space px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row'>
          {/* What's different */}
          <div className='flex flex-col space-y-12 md:w-1/2'>
            <h2 className='max-w-md text-4xl font-bold text-center md:text-left'>
              What&apos;s different about Manage?
            </h2>
            <p className='max-w-sm mx-auto text-center text-darkGrayinshBlue md:text-left'>
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>
          {/* Numbered list */}
          <div className='flex flex-col space-y-8 md:w-1/2'>
            {/* List item 1 */}
            <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
              <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
                <div className='flex items-center space-x-2'>
                  <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
                    01
                  </div>
                  <h3 className='text-base font-bold md:mb-4 md:hidden'>
                    Track company-wide progress
                  </h3>
                </div>
              </div>
              <div>
                <h3 className='hidden mb-4 text-lg font-bold md:block'>
                  Track company-wide progress
                </h3>
                <p className='text-darkGrayishBlue'>
                  See how your day-to-day tasks fit into the wider vision. Go
                  from tracking progress at the milestone level all the way down
                  to the smallest of details. Never lose sight of the bigger
                  picture again.
                </p>
              </div>
            </div>
            {/* List item 2 */}
            <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
              <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
                <div className='flex items-center space-x-2'>
                  <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
                    02
                  </div>
                  <h3 className='text-base font-bold md:mb-4 md:hidden'>
                    Advanced built-in reports
                  </h3>
                </div>
              </div>
              <div>
                <h3 className='hidden mb-4 text-lg font-bold md:block'>
                  Advanced built-in reports
                </h3>
                <p className='text-darkGrayishBlue'>
                  Set internal delivery estimates and track progress toward
                  company goals. Our customizable dashboard helps you build out
                  the reports you need to keep key stakeholders informed.
                </p>
              </div>
            </div>
            {/* List item 3 */}
            <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
              <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
                <div className='flex items-center space-x-2'>
                  <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
                    03
                  </div>
                  <h3 className='text-base font-bold md:mb-4 md:hidden'>
                    Everything you need in one place
                  </h3>
                </div>
              </div>
              <div>
                <h3 className='hidden mb-4 text-lg font-bold md:block'>
                  Everything you need in one place
                </h3>
                <p className='text-darkGrayishBlue'>
                  Stop jumping from one service to another to communicate, store
                  files, track tasks and share documents. Manage offers an
                  all-in-one team productivity solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id='testimonials'>
        <div className='max-w-6xl px-5 mx-auto mt-32 text-center'>
          <h2 className='text-4xl font-bold text-center'>
            What&apos;s different about Manage?
          </h2>
          <div className='flex flex-col mt-24 md:flex-row md:space-x-6 items-center'>
            {/* Testimonial 1 */}
            <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray sm:w-2/3 md:w-1/3'>
              <div className='w-16 -mt-14'>
                <Image src={avatarAnisha} alt='Anisha' />
              </div>
              <h5 className='text-lg-font-bold'>Anisha Li</h5>
              <p className='text-sm text-darkGrayishBlue'>
                &quot;Manage has supercharged our team&apos;s workflow. The
                ability to maintain visibility on larger milestones at all times
                keeps everyone motivated.&quot;
              </p>
            </div>
            {/* Testimonial 2 */}
            <div className='flex mt-16 md:mt-0 flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray sm:w-2/3 md:w-1/3'>
              <div className='w-16 -mt-14'>
                <Image src={avatarAli} alt='Ali' />
              </div>
              <h5 className='text-lg-font-bold'>Ali Bravo</h5>
              <p className='text-sm text-darkGrayishBlue'>
                &quot;We have been able to cancel so many other subscriptions
                since using Manage. There is no more cross-channel confusion and
                everyone is so much more focused.&quot;
              </p>
            </div>
            {/* Testimonial 3  */}
            <div className='flex mt-16 md:mt-0 flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray sm:w-2/3 md:w-1/3'>
              <div className='w-16 -mt-14'>
                <Image src={avatarRichard} alt='Anisha' />
              </div>
              <h5 className='text-lg-font-bold'>Richard Watts</h5>
              <p className='text-sm text-darkGrayishBlue'>
                &quot;Manage is the best thing that ever happened to our team.
                We work faster, communicate more effectively, and have been able
                to meet target after target.&quot;
              </p>
            </div>
          </div>
          {/* Button */}
          <div className='my-16'>
            <a
              href='#'
              className='p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
