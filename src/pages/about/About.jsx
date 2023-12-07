import React from 'react';
import { FadeIn } from '../../components/fadeIn/FadeIn';
import * as Styles from './AboutStyles';

const About = () => {
  return (
    <Styles.AboutContainer>
      <Styles.AboutTextContainer>
        <FadeIn delay={0.2} direction='right'>
          <p>
            AircraftSales has been a pioneer offering aircraft for sale to
            business aviation leaders with 340,000 monthly visitors. Aircraft
            brokers, CEOs and C-level business executives, pilots and flight
            department managers, among many other stakeholders, count on
            AircraftSales as the industry standard. AircraftSales is the premier
            online resource for all your aviation needs, especially when it
            comes to buying and selling airplanes and helicopters.
          </p>
        </FadeIn>
        <FadeIn delay={0.4} direction='left'>
          <p>
            Do you have an airplane for sale? AircraftSales can help. Put your
            aircraft specifications at the fingertips of thousands of monthly
            visitors. If you are looking to purchase a plane, we can help with
            that too. Take a look at our ever-changing selection of new and used
            aircraft for sale.
          </p>
        </FadeIn>
        <FadeIn delay={0.6} direction='right'>
          <p>
            Our technical specification pages cover every aircraft make and
            model, such as the Gulfstream G450, the Cessna Citation CJ4, or the
            Beechcraft King Air 360. There is always a wide selection of your
            favorite aircraft makes and models like Cessna 172, King Air B200,
            Bombardier Challenger 604, Dassault Falcon Jet Falcon 8X,
            Eurocopter, Gulfstream G550, Pilatus PC-12, and Piper Cherokee
            aircraft. Whatever your mission, we have the listings and the tools
            for you to find the aircraft for sale that fits your flying needs.
          </p>
        </FadeIn>
      </Styles.AboutTextContainer>
      <Styles.AboutEmailContainer>
        <FadeIn delay={0.2} direction='right'>
          <div>
            <Styles.AboutEmailInfoContainer>
              <h3>AircraftSales Email Alerts</h3>
              <p>
                Stay in the loop with the latest aviation news & aircraft deals.
              </p>
            </Styles.AboutEmailInfoContainer>
            <Styles.AboutEmailOptionsContainer>
              <p>
                <span>AirMail News :</span> Keep up with the latest news in
                business & general aviation
              </p>
              <p>
                <span>PlaneMail :</span> Get alerts on the latest
                turbine-powered aircraft on the market
              </p>
              <p>
                <span>PistonMail :</span> Get Alerts on the latest
                piston-powered aircraft on the market
              </p>
            </Styles.AboutEmailOptionsContainer>
          </div>
        </FadeIn>
        <FadeIn delay={0.2} direction='left'>
          <Styles.AboutInputEmailBox>
            <Styles.InputBox>
              <input type='email' placeholder='Enter Email Address' />
            </Styles.InputBox>
            <button>sign up</button>
          </Styles.AboutInputEmailBox>
        </FadeIn>
      </Styles.AboutEmailContainer>
    </Styles.AboutContainer>
  );
};

export default About;
