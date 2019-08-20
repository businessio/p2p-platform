import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Features from "./../Features";
import "./styles.scss";

function FeaturesSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Features
          items={[
            {
              title: "How P2P works",
              description:
                "Peer-to-peer lending is changing the face of banking across the world. In much the same way that technology has transformed the way we watch TV, listen to music, order taxis, book holidays and keep in touch with friends, P2P lending is re-shaping the way money moves between lenders and borrowers. P2P lending is about harnessing the power of the crowd. It uses technology to connect people with money to lend, directly to those who need capital. ",
              image: "/images/undraw_connected_8wvi.svg"
            },
            {
              title: "Get a business loan",
              description:
                "Our game-changing approach to business loans means easy applications, quick decisions, dedicated account managers and access to business loans of up to €300,000 in just 24 hours.",
              image: "/images/undraw_business_shop_qw5t.svg"
            },
            {
              title: "Start lending",
              description:
                "Our online lending community allows ordinary individuals to unlock attractive returns lending to great local business. You can start supporting homegrown SMEs with as little as €50.",
              image: "/images/undraw_investing_7u74.svg"
            },
            {
              title: "Unleash your AMBITION",
              description:
                "Ambition. It’s what turns a good idea into a great business. It’s the force that unites entrepreneurs across Ireland. It’s what drives them, day after day, to build the brilliant businesses that become the backbone of our economy. At Linked Finance, we’re here to support that ambition. Our online lending community can provide business loans of up to €300,000 in just 24 hours and our game-changing approach means easy applications, quick decisions and dedicated account managers.",
              image: "/images/undraw_invest_88iw.svg"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default FeaturesSection;
