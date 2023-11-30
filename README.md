2. Add שיר לשבת (According to "Contents UI" page)
3. Fix Navigation links
4. Add animation on page load

---

5. Connect contents to Headless CMS (review options on Vercel)
6. Add Google Map with location as right-sliding Modal
7. CTA?
8. Contact Form Page

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
