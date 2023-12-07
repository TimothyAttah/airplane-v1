import React from 'react';
import * as FooterData from './footerData';
import * as Styles from './FooterStyles';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Styles.FooterContainer>
      <Styles.FooterWrapper>
        <Styles.FooterRightWrapper>
          <Styles.FooterAboutUsWrapper>
            <h2>{FooterData.aboutUsTitle}</h2>
            <p>{FooterData.aboutUs}</p>
          </Styles.FooterAboutUsWrapper>
          <div>
            <h2>{FooterData.quickLinkTitle}</h2>
            <Styles.FooterQuickLinksListWrapper>
              {FooterData.quickLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.link}>{link.title}</Link>
                </li>
              ))}
            </Styles.FooterQuickLinksListWrapper>
          </div>
        </Styles.FooterRightWrapper>
        <Styles.FooterLeftWrapper>
          <h2>{FooterData.contactUsTitle}</h2>
          <p>{FooterData.contactUsAddress}</p>
          <h5>{FooterData.contactUsNum}</h5>
        </Styles.FooterLeftWrapper>
      </Styles.FooterWrapper>
      <small>&copy; 2023 AircraftSales. All rights reserved.</small>
    </Styles.FooterContainer>
  );
};

export default Footer;
