import { Inter, Roboto_Mono, Bellefair } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const bellefair = Bellefair({ weight: '400', subsets: ['hebrew'] });

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
});

//       <h1 className={roboto_mono.className}>My page</h1>
//               className={`text-sm font-semibold leading-6 text-white ${bellefair.className}`}
