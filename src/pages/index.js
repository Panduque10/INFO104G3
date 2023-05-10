import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Image
        src="/images/pc.png"
        alt=""
        width={800}
        height={800}
      />
    </div>
  );
}