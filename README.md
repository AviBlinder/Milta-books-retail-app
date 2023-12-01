create new branches:

1. Connect contents to Headless CMS (review options on Vercel)

2. Add Google Map with location as right-sliding Modal
3. Contact Form Page

Internal and External Navigation:
https://medium.com/@ojogbomichael/same-page-navigation-with-nextjs-bb99cccfda11

```js
import Image from 'next/image';
import profilePic from '../public/me.png';

export default function Page() {
  return (
    // <div style={{ position: 'relative', height: '400px' }}>
      <Image
        src={profilePic}
        alt="Picture of the author"
        {/* width={500}
        height={500} */}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
        style={{
          objectFit: 'cover', // cover, contain, none
        }}

        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
    </div>
  );
}
```

```js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        port: '',
        pathname: '/my-bucket/**',
      },
    ],
  },
};
```
