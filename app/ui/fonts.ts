import { Inter, Lusitana, Poppins } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
export const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
  });
  export const lusitana = Lusitana({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-lusitana',
    weight: ['400','700']
  });