import React from 'react'

import styled from 'styled-components'

import logoBookmark from '../../images/logo-bookmark-alt.svg'
import iconFacebook from '../../images/icon-facebook.svg'
import iconTwitter from '../../images/icon-twitter.svg'

const Sitemap = () => {
    const SitemapCont = styled.div`
        padding:40px 20px;
        background:hsl(229, 31%, 21%);
        text-align:center;

        @media (min-width:800px){
            display:grid;
            grid-template-columns:auto 1fr auto;
            grid-gap:30px;
            align-items:center;
            text-align:left;
            padding:20px;
        }

        .logoCont{
            margin-bottom:30px;

            @media (min-width:800px){
                margin-bottom:0;
            }
        }

        .navCont{
            margin-bottom:30px;

            @media (min-width:800px){
                margin-bottom:0;
            }

            .sitemapMenu{
                display:block;
                text-align:center;
                padding:15px 0;
                color:#fff;
                font-weight:400;
                font-size:.9rem;

                @media (min-width:800px){
                    display:inline-block;
                    padding-right:15px;

                }
            }
        }

        .smFacebook{margin-right:30px;}
    `

    return (
        <div>
            <SitemapCont>
                <div className="logoCont">
                    <img src={logoBookmark} alt="Logo Alt" />
                </div>
                <div className="navCont">
                    <a href="#" className="sitemapMenu">FEATURES</a>
                    <a href="#" className="sitemapMenu">PRICING</a>
                    <a href="#" className="sitemapMenu">CONTACT</a>
                </div>
                <div className="sitemapSocialMediaCont">
                    <a href="#" className="smFacebook"><img src={iconFacebook} alt="facebook icon" /></a>
                    <a href="#" className="smTwitter"><img src={iconTwitter} alt="twitter icon" /></a>
                </div>
            </SitemapCont>
        </div>
    )
}

export default Sitemap
