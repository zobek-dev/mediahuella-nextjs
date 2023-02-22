import Head from 'next/head';
import { globalMeta } from '@/helpers';

export const SeoHead = () => {
  return(
    <Head>
      <title>{globalMeta.siteName}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={globalMeta.description} />
      <link rel="canonical" href={globalMeta.siteUrl} />
      <link rel="icon" href={globalMeta.siteLogo} />
    </Head>
  )
}