import * as React from 'react';
import { NextSeoProps, DefaultSeo, NextSeo } from 'next-seo';
import { SEO_OPTIONS } from './constants';

export interface ISeoProps {
    title: string;
    description?: string;
    twitterCardType?: string;
    seoImage?: {
        url: string;
        alt: string;
        width?: number;
        height?: number;
    };
}

function Seo(config: ISeoProps) {
    const { title, description, twitterCardType, seoImage } = config;
    const openGraphBasicConfig = {
        title: `${SEO_OPTIONS.TITLE} | ${title}`,
        description,
        type: 'website',
        url: SEO_OPTIONS.SITE,
    };
    const seoConfig: NextSeoProps = {
        title,
        description,
        noindex: true,
        nofollow: true,
        titleTemplate: `${SEO_OPTIONS.TITLE} | %s`,
        defaultTitle: SEO_OPTIONS.TITLE,
        facebook: {
            appId: SEO_OPTIONS.FACEBOOK_APPID,
        },
        twitter: {
            handle: SEO_OPTIONS.TWITTER_HANDLE,
            site: SEO_OPTIONS.SITE,
            cardType: twitterCardType || SEO_OPTIONS.TWITTER_CARD_TYPE.SUMMARY,
        },
        openGraph: seoImage
            ? {
                  ...openGraphBasicConfig,
                  images: [
                      {
                          url: seoImage?.url,
                          width: seoImage?.width || 800,
                          height: seoImage.height || 420,
                          alt: seoImage?.alt,
                      },
                  ],
              }
            : openGraphBasicConfig,
    };
    return <DefaultSeo {...seoConfig} />;
}

export default Seo;
