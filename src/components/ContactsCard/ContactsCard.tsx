import './contactsCard.scss';
import githubIcon from '../../icons/github.svg';
import emailIcon from '../../icons/email.svg';
import linkedinIcon from '../../icons/linkedin.svg';
import React from 'react';
import classNames from 'classnames';

interface Props {
  img: string,
  name: string,
  github: string,
  linkedin: string,
  email: string,
  techLead?: boolean,
}

export const ContactsCard: React.FC<Props> = ({
  img,
  name,
  github,
  linkedin,
  email,
  techLead,
}) => (
  <figure className="snip1344">
  <img
    src={img}
    alt={name}
    className="background"
  />
  <img
    src={img}
    alt={name}
    className={classNames('profile', {
      'profile--leader': techLead,
    })}
  />
  <figcaption>
    <h3>
      {name}<span>Developer</span>
    </h3>
    <div className="icons">
      <a href={github}>
        <img
          src={githubIcon}
          className="contact-icon ion-social-reddit-outline"
        ></img>
      </a>
      <a href={linkedin}>
        {' '}
        <img
          src={linkedinIcon}
          className="contact-icon ion-social-twitter-outline"
        ></img>
      </a>
      <a href={email}>
        {' '}
        <img
          src={emailIcon}
          className="contact-icon ion-social-vimeo-outline"
        ></img>
      </a>
    </div>
  </figcaption>
</figure>
);
