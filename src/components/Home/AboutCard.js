import React from "react";
import Card from "react-bootstrap/Card";
import { useTranslation } from 'react-i18next';

function AboutCard() {
  const { t } = useTranslation();
  
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <p>
              {t('about_intro')}{' '}
              <i><b className="purple">HTB Academy</b></i>{' '}
              {t('and_platform')}{' '}
              <i><b className="purple">Hack4u.io</b></i>.
            </p>

            <p>{t('training_completed')}</p>
            <ul>
              <li><b className="purple">{t('intro_hacking')}</b></li>
              <li>{t('web_hacking')}</li>
              <li>{t('ad_hacking')}</li>
            </ul>

            <br />

            {t('practice_platforms')}{' '}
            <i>
              <b className="purple">HackTheBox, VulHub, PortSwigger y TryHackMe.</b>
            </i>
            <br />
            {t('more_details')}
            
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;