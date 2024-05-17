import React from 'react';
import Link from 'next/link';
export default function HomePage() {
  return (
    <div>
      <h1>Welcome to my website!</h1>
      <Link href="/products">Products</Link>
      <br/>
      <Link href="/movies">Movies</Link>
      <br/>
      <Link href="/about">About</Link>
      <br/>
    </div>
  );
}