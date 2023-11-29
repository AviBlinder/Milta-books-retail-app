1. Add last page according to design
2. Add שיר לשבת
3. Add animation on page load
4. Connect contents to Headless CMS
5. Add Google Map with location
6. CTA?

Bellefair

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
