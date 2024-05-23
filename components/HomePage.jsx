import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Link from 'next/link';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <div className="container">
      <h1 className="text-center mt-5">My Next App</h1>
      <div className="d-flex flex-row align-items-center justify-content-around">
        <Link className="btn btn-primary mt-3" href="/about">
          About
        </Link>
        <Link className="btn btn-primary mt-3" href="/movies">
          Movies
        </Link>
        <Link className="btn btn-primary mt-3" href="/products">
          Product
        </Link>
      </div>
    </div>
  );
}